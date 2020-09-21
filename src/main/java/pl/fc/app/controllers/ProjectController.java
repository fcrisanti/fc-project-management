package pl.fc.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import pl.fc.app.dao.variables.ICompanyRepository;
import pl.fc.app.dao.variables.IGenesisRepository;
import pl.fc.app.dao.variables.IStatusRepository;
import pl.fc.app.enities.Employee;
import pl.fc.app.enities.Project;
import pl.fc.app.enities.variables.Company;
import pl.fc.app.enities.variables.CompanysDTO;
import pl.fc.app.enities.variables.Genesis;
import pl.fc.app.enities.variables.Status;
import pl.fc.app.security.PermissionManager;
import pl.fc.app.services.EmployeeService;
import pl.fc.app.services.ProjectService;
import pl.fc.app.services.StatusReportService;

import javax.servlet.http.HttpServletResponse;
import java.util.List;

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

    @Autowired
    StatusReportService statusReportService;

    @Autowired
    PermissionManager permissionManager;


    @GetMapping
    public String displayAllProjects(Model model) {
        List<Project> projects = projectService.getAll();
        model.addAttribute("projects", projects);
        model.addAttribute("advanced",permissionManager.userAllowed("advanced-view"));
        return "projects/list-projects";
    }

    @GetMapping("/edit")
    public String editProject(@RequestParam Long id, Model model, HttpServletResponse response) {
        if(permissionManager.userAllowed("project-edit")) {
            Project project = projectService.getByID(id);
            return modelAttributesLoader(model, project);
        } else {
            response.setStatus(403);
            return "errorpages/error-403";
        }
    }

    @GetMapping("/new")
    public String displayProjectForm(Model model, Project project, RedirectAttributes redirectAttributes) {
        redirectAttributes.addAttribute("project",project);
        return modelAttributesLoader(model, project);
    }

    private String modelAttributesLoader(Model model, Project project) {
        List<Employee> employees = employeeService.getAll();

        CompanysDTO allCompanies = new CompanysDTO(companyRepository.findAll());
        List<Status> allStatuses = statusRepository.findAll();
        List<Genesis> allGenesis = genesisRepository.findAll();

        model.addAttribute("allEmployees", employees);

        model.addAttribute("project", project);
        model.addAttribute("costcat",project.getCategoryBudgetExpensesRemainingAndUpdateBudget());
        model.addAttribute("costcompany",project.getExpensesByCompany());
        model.addAttribute("costyear",project.getExpensesByYear());
        model.addAttribute("costit",project.getExpensesByIsIT());

        model.addAttribute("allCompanies", allCompanies);
        model.addAttribute("allGenesis", allGenesis);
        model.addAttribute("allStatuses", allStatuses);

        return "projects/edit-project";
    }

    @PostMapping("/save")
    public String saveProject(Project project, RedirectAttributes redirectAttributes, Model model) {
        if (!projectService.findByID(project.getProjectId()).isPresent()) {
            if (projectService.findBySapNo(project.getSapNo()).isPresent()) {
                redirectAttributes.addFlashAttribute("errorMessage", String.format("Nie można zapisać projektu. Projekt o numerze P%d już istnieje.", project.getSapNo()));
                redirectAttributes.addFlashAttribute("project",project);
                return "redirect:/projects/new";
            }
        } else {
            project.setPMCostCategory(projectService.findByID(project.getProjectId()).get().getPMCostCategory());
            project.setCostAllocation(projectService.convertCompaniesToCostAllocation(project.getCompanies(),project.getCostAllocation()));
        }
        projectService.save(project);
        redirectAttributes.addFlashAttribute("projectSaved", Boolean.TRUE);
        return "redirect:/projects/edit?id="+project.getProjectId();
    }

    @GetMapping("/delete")
    public String deleteProject(@RequestParam Long id, Model model, HttpServletResponse response) {
        if(permissionManager.userAllowed("admin-dash")) {
        projectService.deleteByID(id);
        return "redirect:/projects";
        } else {
            response.setStatus(403);
            return "errorpages/error-403";
        }
    }
}
