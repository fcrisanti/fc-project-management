package pl.fc.app.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import pl.fc.app.dto.IEmployeeProject;
import pl.fc.app.enities.Employee;

import java.util.List;
import java.util.Optional;

public interface IEmployeeRepository extends CrudRepository<Employee, Long> {
    @Override
    List<Employee> findAll();

    @Query(nativeQuery = true, value="" +
            "SELECT employee.first_name as firstName, employee.last_name as lastName, COUNT(project_employee.employee_id) as projectCount\n" +
            "FROM employee LEFT JOIN project_employee ON employee.employee_id=project_employee.employee_id\n" +
            "GROUP BY employee.first_name, employee.last_name ORDER BY 3 DESC;")
    public List<IEmployeeProject> employeeProjects();

    Optional<Employee> findEmployeeByFirstNameAndLastName(String firstName, String lastName);
}
