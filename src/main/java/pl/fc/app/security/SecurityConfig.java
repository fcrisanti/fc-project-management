package pl.fc.app.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.condition.ConditionalOnExpression;
import org.springframework.boot.autoconfigure.condition.ConditionalOnProperty;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.ProviderManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//import org.springframework.security.ldap.authentication.ad.ActiveDirectoryLdapAuthenticationProvider;
import org.springframework.util.FileCopyUtils;

import javax.sql.DataSource;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.util.Arrays;

@Configuration
@EnableWebSecurity
class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    DataSource dataSource;
    @Autowired
    BCryptPasswordEncoder passwordEncoder;
    @Value("${ldap.domain}")
    private String DOMAIN;
    @Value("${ldap.url}")
    private String URL;

    Boolean ldapProvided() {
        return DOMAIN != null;
    }

    Boolean ldap = false;

    private final Logger LOGGER = LoggerFactory.getLogger(this.getClass());

    @Override
    protected void configure(AuthenticationManagerBuilder authManagerBuilder) throws Exception {

        if (DOMAIN != null) {
            authManagerBuilder.authenticationProvider(activeDirectoryLdapAuthenticationProvider()).userDetailsService(userDetailsService());
        } else {
            LOGGER.warn("Active Directory domain not set! Pass the env variable AD_DOMAIN to the application to set AD active.");
            authManagerBuilder.jdbcAuthentication().dataSource(dataSource)
                    .usersByUsernameQuery(
                            "select username, password, enabled from user_accounts where username=?")
                    .authoritiesByUsernameQuery(
                            "select username, role from user_accounts where username=?")
                    .dataSource(dataSource)
                    .passwordEncoder(passwordEncoder);
        }
    }


    @Bean
    @Override
    public AuthenticationManager authenticationManager() throws Exception {
        if(ldapProvided()) {
            return new ProviderManager(Arrays.asList(activeDirectoryLdapAuthenticationProvider()));
        } else return super.authenticationManager();
    }


    @Bean
    @ConditionalOnExpression("!T(org.springframework.util.StringUtils).isEmpty('${AD_DOMAIN:}')")
    public AuthenticationProvider activeDirectoryLdapAuthenticationProvider() throws IOException {

        LOGGER.info("Active Directory is set-up. Domain: "+DOMAIN);
        LOGGER.info("AD URL: "+URL);


        //Adding certificate from Resources (cacerts.jks) with password "changeit"
//        File jks = File.createTempFile("cacerts", "jks");
//        jks.deleteOnExit();
//
//        try (InputStream fromJks = SecurityConfig.class.getResource("/cacerts.jks").openStream()) {
//            FileCopyUtils.copy(FileCopyUtils.copyToByteArray(fromJks), jks);
//        }
//
//        System.setProperty("javax.net.ssl.trustStore", jks.getPath());
//        System.setProperty("javax.net.ssl.trustStorePassword", "changeit");

        ActiveDirectoryLdapAuthenticationProvider provider = new ActiveDirectoryLdapAuthenticationProvider(DOMAIN, URL);
        provider.setConvertSubErrorCodesToExceptions(true);
        provider.setUseAuthenticationRequestCredentials(true);
        return provider;
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
// For testing USER has full power
//                .antMatchers("/projects/new").hasRole("ADMIN")
//                .antMatchers("/projects/save").hasRole("ADMIN")
//                .antMatchers("/employees/new").hasRole("ADMIN")
//                .antMatchers("/employees/save").hasRole("ADMIN")
                .antMatchers("/", "/**").authenticated()
                .and()
                .formLogin();
        http.headers().frameOptions().disable();

        /*
         * Use HTTPs for ALL requests
         */
//        http.requiresChannel().anyRequest().requiresSecure();
//        http.portMapper().http(httpPort).mapsTo(httpsPort);
    }
}
