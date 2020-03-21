package pl.fc.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.fc.app.dao.IEmployeeRepository;
import pl.fc.app.dto.IEmployeeProject;
import pl.fc.app.enities.Employee;

import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    IEmployeeRepository employeeRepository;

    public void save(Employee employee) {
        employeeRepository.save(employee);
    }

    public List<Employee> getAll() {
       return employeeRepository.findAll();
    }

    public List<IEmployeeProject> employeesProjectCount() {
       return employeeRepository.employeeProjects();
    }
}
