# fc-project-management
Project Portfolio Management made with Spring, Hibernate, JS, Thymeleaf, PostgreSQL/H2, Spring Security (work in progress)

# Technology stack:
- Spring
- JPA/Hibernate
- PostgreSQL (H2 for testing)
- Spring Security
- Thymeleaf
- JavaScript libraries:
    - dxhtmlgantt (Free GNU GPL v2)
    - MDBootstrap jQuery
    - DataTables (datatables.net)

# Requirements:
PostgreSQL db v. 9.2+ with an empty database set and md5 authentication data

The app is configured (in application.properties) to obtain connection data from environment (default):
* `spring.datasource.url=${jdbcurl}` 
  -  for example: `jdbc:postgresql://localhost:5432/database-name`
* `spring.datasource.username=${dbuser}` - database username
* `spring.datasource.password=${dbpass}` - database password
(requires setting env. variables: `jdbcurl`, `dbuser`, `dbpass`)

This can be easily changed in application.properties file.

# Docker
You can run it with either docker-compose or Dockerfile. In case of Dockerfile run it with options `-p 5432:5432 -p 8080:8080 --env jdbcurl --env dbuser --env dbpass`
It requires having set the host environmental variables: `jdbcurl`, `dbuser`, `dbpass` compatible with your Postgres db v. 9.2+ settings (a database must exist before program launch).
Should you use a host postgres db on Windows and Mac remember to replace in `jdbcurl` the `localhost` with `host.docker.internal` e.g. `jdbc:postgresql://host.docker.internal:5432/database-name`

# Quickstart

The app runs by default at port 8080.
To begin, register your first user at `http://your-host-address:8080/register` (e.g. `http://localhost:8080/register`)