FROM ubuntu:latest

MAINTAINER Francesco Crisanti "fcrisanti@gmail.com"

RUN apt-get update && apt-get install -y openjdk-8-jdk

#ENV jdbcurl=
#ENV dbuser=
#ENV dbpass=

WORKDIR /home/ubuntu/
#/usr/local/bin/

ADD target/fc-project-management.jar .

# CMD ["/bin/bash"]
ENTRYPOINT ["java", "-jar", "fc-project-management.jar"]