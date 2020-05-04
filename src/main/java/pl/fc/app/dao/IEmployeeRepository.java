package pl.fc.app.dao;

import org.springframework.data.repository.CrudRepository;
import pl.fc.app.enities.Employee;

import java.util.List;
import java.util.Optional;

public interface IEmployeeRepository extends CrudRepository<Employee, Long> {
    @Override
    List<Employee> findAll();

    Optional<Employee> findEmployeeByFirstNameAndLastName(String firstName, String lastName);
}
