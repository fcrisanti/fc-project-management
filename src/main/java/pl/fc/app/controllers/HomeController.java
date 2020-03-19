package pl.fc.app.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import pl.fc.app.dao.IEmployeeRepository;
import pl.fc.app.dao.IProjectRepository;
import pl.fc.app.dto.EmployeeProject;
import pl.fc.app.dto.ProjectStatus;
import pl.fc.app.enities.Employee;
import pl.fc.app.enities.Project;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Controller
public class HomeController {

    @Value("${version}")
    String version;

    @Autowired
    IProjectRepository projectRepository;

    @Autowired
    IEmployeeRepository employeeRepository;

    @GetMapping("/")
    public String displayHome(Model model) throws JsonProcessingException {

        model.addAttribute("version",version);

        List<Project> projects = projectRepository.findAll();
        List<EmployeeProject> employeesProjectCount = employeeRepository.employeeProjects();
        List<ProjectStatus> projectStatusCount = projectRepository.projectStatus();

        //Project data to JSON structure
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonString = objectMapper.writeValueAsString(projectStatusCount);
        System.out.println(jsonString);
        model.addAttribute("JSONprojectStatusCount",jsonString);

        model.addAttribute("projects", projects);
        model.addAttribute("employeesProjectCount", employeesProjectCount);
        model.addAttribute("projectStatusCount", projectStatusCount);
        return "main/home";
    }

}
