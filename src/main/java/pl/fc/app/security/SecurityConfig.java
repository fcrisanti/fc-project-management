package pl.fc.app.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

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
                .usersByUsernameQuery(
                        "select username, password, enabled from user_accounts where username=?")
                .authoritiesByUsernameQuery(
                        "select username, role from user_accounts where username=?")
                .dataSource(dataSource)
                .passwordEncoder(passwordEncoder);
    }


    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
// For testing USER has full power
//                .antMatchers("/projects/new").hasRole("ADMIN")
//                .antMatchers("/projects/save").hasRole("ADMIN")
//                .antMatchers("/employees/new").hasRole("ADMIN")
//                .antMatchers("/employees/save").hasRole("ADMIN")
                .antMatchers("/", "/**").hasRole("USER")
                .and()
                .formLogin();
    }
}
