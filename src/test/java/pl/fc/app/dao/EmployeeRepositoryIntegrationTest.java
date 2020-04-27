package pl.fc.app.dao;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import pl.fc.app.enities.Employee;
import static org.junit.Assert.assertEquals;

@SpringBootTest
@RunWith(SpringRunner.class)
public class EmployeeRepositoryIntegrationTest {

    @Autowired
    IEmployeeRepository employeeRepository;

    @Test
    public void ifNewEmployeeSaved_thenSuccess() {
        Employee employee = new Employee("Test Name", "Test Last Name", "Test");
        employeeRepository.save(employee);

        assertEquals(1, employeeRepository.findAll().size());
    }
}
