# fc-project-management
Project Portfolio Management made with Spring, Hibernate, JS, Thymeleaf, PostgreSQL/H2, Spring Security (work in progress)

<strong><em>
### Check out the Heroku demo
https://fc-proton.herokuapp.com/

Login: test 
Password: test
</strong></em>

# Technology stack:
- Spring
- JPA/Hibernate
- PostgreSQL (H2 for testing)
- Spring Security
- Thymeleaf
- JavaScript libraries:
    - dxhtmlgantt (Free GNU GPL v2)
    - MDBootstrap 
    - jQuery
    - DataTables (datatables.net)
    - Sing App Free Bootstrap template (MIT-licensed https://github.com/flatlogic/sing-app)

# Features:

### 1. All Projects Listing

Editable project list with advanced sorting and export options (based on DataTables and jQuery)

![Project List](https://raw.githubusercontent.com/fcrisanti/fc-project-management/master/screenshots/projectview.png)

### 2. Project View and Editing

Project Properties, Schedule (dxhtmlgantt) and Budget editing with cost import from Excel file

![Single Project View](https://raw.githubusercontent.com/fcrisanti/fc-project-management/master/screenshots/projectedit.png)

### 3. Project Status Reporting

Project Status Reports summary view with period selector and missing reports view

![Status Report List](https://raw.githubusercontent.com/fcrisanti/fc-project-management/master/screenshots/statusreports.png)

Status Reports editing with PDF and PPT (PowerPoint) export

![Status Report List](https://raw.githubusercontent.com/fcrisanti/fc-project-management/master/screenshots/reportseditor.png)

### 4. Employee Management

Employee view with employee projects

![Status Report List](https://raw.githubusercontent.com/fcrisanti/fc-project-management/master/screenshots/employeeview.png)

### 5. and many more including:

* editable glossaries of project parameters
* editable custom budget categories
* automatic expenditures calculations divided by year, type and custom defined categories
* export to Excel or copy to clipboard feature for almost every table
* advanced multi-criteria table searching
* various checks before saving projects and status reports
* Active Directory support (based on Spring Security)

# Requirements:
PostgreSQL db v. 9.2+ with an empty database set and md5 authentication data

The app is configured (in application.properties) to obtain connection data from environment (default):
* `spring.datasource.url=${jdbcurl}` 
  -  for example: `jdbc:postgresql://localhost:5432/database-name`
* `spring.datasource.username=${dbuser}` - database username
* `spring.datasource.password=${dbpass}` - database password
(requires setting env. variables: `jdbcurl`, `dbuser`, `dbpass`)

This can be easily changed in application.properties file.

# Docker (optional)
You can run it with either docker-compose or Dockerfile. In case of Dockerfile run it with options `-p 5432:5432 -p 8080:8080 --env jdbcurl --env dbuser --env dbpass`
It requires having set the host environmental variables: `jdbcurl`, `dbuser`, `dbpass` compatible with your Postgres db v. 9.2+ settings (a database must exist before program launch).
Should you use a host postgres db on Windows and Mac remember to replace in `jdbcurl` the `localhost` with `host.docker.internal` e.g. `jdbc:postgresql://host.docker.internal:5432/database-name`

# Active Directory integration (optional)
To log in with AD pass this env variables:
`AD_DOMAIN` - (required) AD domain, if not passed the app will read and store users in PostgreSQL
`AD_URL` - (required) AD server url (ldap:// or ldaps://)
`AD_PORT` - port for non SSL/TLS connections, default 389
`AD_HTTPS_PORT` - port for HTTPS connections, default 636
`AD_SECURITY_PROTOCOL` - security protocol. Possible options: "ssl", "tls". Leave empty for auto.
Should you use a certificate remember to add it to the jdk TrustStore.

# Quickstart
The app runs by default at port 8080 (can be changed using PORT env variable).
If you don't use AD login to begin, register your first user at `http://your-host-address:8080/register` (e.g. `http://localhost:8080/register`)