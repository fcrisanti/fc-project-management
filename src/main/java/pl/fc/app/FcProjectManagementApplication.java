package pl.fc.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;


@SpringBootApplication
@EnableAutoConfiguration
public class FcProjectManagementApplication
//        extends SpringBootServletInitializer
{
    public static void main(String[] args)
    {
       SpringApplication.run(FcProjectManagementApplication.class, args);
//        Flyway flyway = Flyway.configure().dataSource("jdbc:h2:mem:testdb", "sa", "").load();
//        flyway.migrate();
    }

}


