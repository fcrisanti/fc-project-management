package pl.fc.app.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import pl.fc.app.dto.IEmployeeProject;
import pl.fc.app.dto.IProjectStatus;
import pl.fc.app.enities.Project;
import pl.fc.app.services.EmployeeService;
import pl.fc.app.services.ProjectService;

import java.util.List;

@Controller
class HomeController {

    @Value("${version}")
    String version;

    @Autowired
    ProjectService projectService;

    @Autowired
    EmployeeService employeeService;

    @GetMapping("/")
    public String displayHome(Model model) throws JsonProcessingException {

        model.addAttribute("version",version);

        List<Project> projects = projectService.getAll();
        List<IEmployeeProject> employeesProjectCount = employeeService.employeesProjectCount();
        List<IProjectStatus> IProjectStatusCount = projectService.projectStatus();

        //Project data to JSON structure
        ObjectMapper objectMapper = new ObjectMapper();
        String jsonString = objectMapper.writeValueAsString(IProjectStatusCount);
        System.out.println(jsonString);
        model.addAttribute("JSONprojectStatusCount",jsonString);

        model.addAttribute("projects", projects);
        model.addAttribute("employeesProjectCount", employeesProjectCount);
        model.addAttribute("projectStatusCount", IProjectStatusCount);
        return "main/home";
    }

}
