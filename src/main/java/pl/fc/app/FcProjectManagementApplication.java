package pl.fc.app;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import pl.fc.app.dao.IEmployeeRepository;
import pl.fc.app.dao.IProjectRepository;
import pl.fc.app.enities.Employee;
import pl.fc.app.enities.Project;
import org.flywaydb.core.Flyway;

import java.util.Arrays;

@SpringBootApplication
public class FcProjectManagementApplication {

    public static void main(String[] args) {
        SpringApplication.run(FcProjectManagementApplication.class, args);
        Flyway flyway = Flyway.configure().dataSource("jdbc:h2:mem:testdb", "sa", "").load();
        flyway.migrate();

    }

}


