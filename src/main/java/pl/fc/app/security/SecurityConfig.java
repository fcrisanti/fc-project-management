package pl.fc.app.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import javax.sql.DataSource;

@Configuration
@EnableWebSecurity
class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    DataSource dataSource;

    @Autowired
    BCryptPasswordEncoder passwordEncoder;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.jdbcAuthentication().dataSource(dataSource)
// For PostgreSQL:
                .usersByUsernameQuery(
                        "select username, password, enabled from user_accounts where username=?")
                .authoritiesByUsernameQuery(
                        "select username, role from user_accounts where username=?")
                .dataSource(dataSource)
                .passwordEncoder(passwordEncoder);
// For H2:
//                .withDefaultSchema()
//                .withUser("admin")
//                .roles("ADMIN")
//                .password("admin")
//                .and()
//                .withUser("user")
//                .password("user")
//                .roles("USER");
    }


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                .antMatchers("/projects/new").hasRole("USER")
                .antMatchers("/projects/save").hasRole("USER")
                .antMatchers("/employees/new").hasRole("USER")
                .antMatchers("/employees/save").hasRole("USER")
                .antMatchers("/", "/**").permitAll()
//  just for H2:
//              .antMatchers("/h2_console/**").permitAll()
//                .authenticated()
                .and()
                .formLogin();

        //  just for H2 console/testing - dangerous in production!
//        http.csrf().disable();
//        http.headers().frameOptions().disable();
    }
}
