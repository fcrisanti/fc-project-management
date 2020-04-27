package pl.fc.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import pl.fc.app.dao.variables.ICompanyRepository;
import pl.fc.app.dao.variables.IGenesisRepository;
import pl.fc.app.dao.variables.IStatusRepository;
import pl.fc.app.enities.Employee;
import pl.fc.app.enities.Project;
import pl.fc.app.enities.variables.Company;
import pl.fc.app.enities.variables.Genesis;
import pl.fc.app.enities.variables.Status;
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

    @Autowired
    ICompanyRepository companyRepository;

    @Autowired
    IStatusRepository statusRepository;

    @Autowired
    IGenesisRepository genesisRepository;

    @GetMapping
    public String displayAllProjects(Model model) {
        List<Project> projects = projectService.getAll();
        model.addAttribute("projects", projects);
        return "projects/list-projects";
    }

    @GetMapping("/display")
    public String displaySingleProject(@RequestParam Long id, Model model) {
        Optional<Project> maybeProject = projectService.findByID(id);
        Project project = maybeProject.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Motyla noga! Nie znalazłem takiego projektu :("));
        System.out.println("projekt nr" + project.getProjectId());
        model.addAttribute("project", project);
        return "projects/project";
    }

    @GetMapping("/edit")
    public String editProject(@RequestParam Long id, Model model) {
        Optional<Project> maybeProject = projectService.findByID(id);
        Project project = maybeProject.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Motyla noga! Nie znalazłem takiego projektu :("));
        return modelAttributesLoader(model, project);
    }

    @GetMapping("/new")
    public String displayProjectForm(Model model, RedirectAttributes redirectAttributes) {
        Project project = new Project();
        return modelAttributesLoader(model, project);
    }

    private String modelAttributesLoader(Model model, Project project) {
        List<Employee> employees = employeeService.getAll();

        List<Company> allCompanies = companyRepository.findAll();
        List<Status> allStatuses = statusRepository.findAll();
        List<Genesis> allGenesis = genesisRepository.findAll();

        model.addAttribute("allEmployees", employees);

        model.addAttribute("project", project);

        model.addAttribute("allCompanies", allCompanies);
        model.addAttribute("allGenesis", allGenesis);
        model.addAttribute("allStatuses", allStatuses);

        return "projects/edit-project";
    }

    @PostMapping("/save")
    public String createProject(Project project, RedirectAttributes redirectAttributes, Model model) {
        if (!projectService.findByID(project.getProjectId()).isPresent()) {
            if (projectService.findBySapNo(project.getSapNo()).isPresent()) {
                redirectAttributes.addFlashAttribute("errorMessage", String.format("Nie można zapisać projektu. Projekt o numerze P%d już istnieje.",project.getSapNo()));
                return "redirect:/projects/new";
            }
        }
        projectService.save(project);
        return "redirect:/projects";
    }

    @GetMapping("/delete")
    public String deleteProject(@RequestParam Long id, Model model) {
        projectService.deleteByID(id);
        return "redirect:/projects";
    }
}
