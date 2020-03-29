package pl.fc.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.HttpServerErrorException;
import org.springframework.web.server.ResponseStatusException;
import pl.fc.app.enities.Employee;
import pl.fc.app.enities.Project;
import pl.fc.app.services.EmployeeService;
import pl.fc.app.services.ProjectService;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/projects")
class ProjectController {

    @Autowired
    ProjectService projectService;

    @Autowired
    EmployeeService employeeService;

    @GetMapping
    public String displayAllProjects(Model model) {
        List<Project> projects = projectService.getAll();
        model.addAttribute("projects",projects);
        return "projects/list-projects";
    }

    @GetMapping("/display")
    public String displaySingleProject(@RequestParam Long id, Model model) {
        Optional<Project> maybeProject = projectService.getByID(id);
        Project project = maybeProject.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Motyla noga! Nie znalazłem takiego projektu :("));
        model.addAttribute("project",project);
        return "projects/project";
    }

    @GetMapping("/new")
    public String displayProjectForm(Model model) {
        Project project = new Project();
        List<Employee> employees = employeeService.getAll();
        model.addAttribute("allEmployees", employees);
        model.addAttribute("project", project);
        return "projects/new-project";
    }

    @PostMapping("/save")
    public String createProject(Project project, @RequestParam List<Long> employees, Model model) {
        projectService.save(project);

        return "redirect:/projects";
    }
}
