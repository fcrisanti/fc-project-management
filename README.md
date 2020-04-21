# fc-project-management
Project Portfolio Management made with Spring, Hibernate, JS, Thymeleaf, PostgreSQL/H2, Spring Security (work in progress)

# Technology stack:
- Spring
- Hibernate
- PostgreSQL (H2 for testing)
- Spring Security
- JavaScript libraries:
    - dxhtmlgantt (Free GNU GPL v2)
    - MDBootstrap jQuery
    - DataTables (datatables.net)

# Requirements:
Postgres db v. 12+

Can be configured (in application.properties) to obtain connection data from environment (default):
spring.datasource.url=${jdbcurl}
spring.datasource.username=${dbuser}
spring.datasource.password=${dbpass}
(requires setting env. variables: jdbcurl, dbuser, dbpass)


Or with a fixed datasource data which is set to:
spring.datasource.url=jdbc:postgresql://localhost:5432/fc-ppm-db
spring.datasource.username=postgres
spring.datasource.password=admin
(requires Postgres db named "fc-ppm-db" available on localhost:5432 with Postgres user and Password 'admin')

All of the above settings can be changed in application.properties file.

To begin, register first user at http://localhost:8080/register