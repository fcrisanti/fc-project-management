FROM ubuntu:latest
EXPOSE 8080

MAINTAINER Francesco Crisanti "fcrisanti@gmail.com"

RUN apt-get update && apt-get install -y openjdk-8-jdk

WORKDIR /home/ubuntu/

ADD target/fc-project-management.jar .

ENTRYPOINT ["java", "-jar", "fc-project-management.jar"]