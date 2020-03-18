package pl.fc.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import pl.fc.app.dao.IEmployeeRepository;
import pl.fc.app.dao.IProjectRepository;
import pl.fc.app.enities.Employee;
import pl.fc.app.enities.Project;

import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/projects")
public class ProjectController {

    @Autowired
    IProjectRepository projectRepository;

    @Autowired
    IEmployeeRepository employeeRepository;

    @GetMapping
    public String displayProjects(Model model) {
        List<Project> projects = projectRepository.findAll();
        model.addAttribute("projects",projects);
        return "projects/list-projects";
    }

    @GetMapping("/new")
    public String displayProjectForm(Model model) {
        Project project = new Project();
        List<Employee> employees = employeeRepository.findAll();
        model.addAttribute("allEmployees", employees);
        model.addAttribute("project", project);
        return "projects/new-project";
    }

    @PostMapping("/save")
    public String createProject(Project project, @RequestParam List<Long> employees, Model model) {
        projectRepository.save(project);

        return "redirect:/projects";
    }
}
