package pl.fc.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import pl.fc.app.services.EmployeeService;
import pl.fc.app.services.ProjectService;

@Controller
class HomeController {

    @Autowired
    ProjectService projectService;

    @Autowired
    EmployeeService employeeService;

    @GetMapping("/")
    public String displayAllProjects() {
//        List<Project> projects = projectService.getAll();
//        model.addAttribute("projects",projects);
        return "redirect:/projects";
    }


//    public String displayHome(Model model) throws JsonProcessingException {
//
//        model.addAttribute("version",version);
//
//        List<Project> projects = projectService.getAll();
//        List<IEmployeeProject> employeesProjectCount = employeeService.employeesProjectCount();
//        List<IProjectStatus> IProjectStatusCount = projectService.projectStatus();
//
//        //Project data to JSON structure
//        ObjectMapper objectMapper = new ObjectMapper();
//        String jsonString = objectMapper.writeValueAsString(IProjectStatusCount);
//        System.out.println(jsonString);
//        model.addAttribute("JSONprojectStatusCount",jsonString);
//
//        model.addAttribute("projects", projects);
//        model.addAttribute("employeesProjectCount", employeesProjectCount);
//        model.addAttribute("projectStatusCount", IProjectStatusCount);
////        return "index";
//        return "main/home";
//    }

}
