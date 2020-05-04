package pl.fc.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.fc.app.dao.IEmployeeRepository;
import pl.fc.app.enities.Employee;

import java.util.List;
import java.util.Optional;

@Service
public class EmployeeService {

    @Autowired
    IEmployeeRepository employeeRepository;

    public void save(Employee employee) {
        employeeRepository.save(employee);
    }

    public void removeEmployeeByFirstNameAndSecondName(String firstName, String secondName) {
        Optional<Employee> employee = employeeRepository.findEmployeeByFirstNameAndLastName(firstName, secondName);
        if (employee.isPresent()) {
            if (employee.get().getProjects().isEmpty()) {
                employeeRepository.delete(employee.get());
            }
        }
    }

    public List<Employee> getAll() {
        return employeeRepository.findAll();
    }

}
