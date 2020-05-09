package pl.fc.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import pl.fc.app.dao.variables.ICompanyRepository;
import pl.fc.app.dao.variables.IGenesisRepository;
import pl.fc.app.dao.variables.IStatusRepository;
import pl.fc.app.enities.Employee;
import pl.fc.app.enities.Project;
import pl.fc.app.enities.ProjectStatusReport;
import pl.fc.app.enities.variables.Company;
import pl.fc.app.enities.variables.Genesis;
import pl.fc.app.enities.variables.Status;
import pl.fc.app.services.EmployeeService;
import pl.fc.app.services.ProjectService;
import pl.fc.app.services.StatusReportService;

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

    @GetMapping
    public String displayAllProjects(Model model) {
        List<Project> projects = projectService.getAll();
        model.addAttribute("projects", projects);
        return "projects/list-projects";
    }

    @GetMapping("/edit")
    public String editProject(@RequestParam Long id, Model model) {
        Project project = projectService.getByID(id);
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
                redirectAttributes.addFlashAttribute("errorMessage", String.format("Nie można zapisać projektu. Projekt o numerze P%d już istnieje.", project.getSapNo()));
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

    @GetMapping("{id}/psr")
    public String newProjectStatusReport(@PathVariable("id") Long id, Model model) {
        Project project = projectService.getByID(id);
        ProjectStatusReport projectStatusReport = new ProjectStatusReport();

        model.addAttribute("project", project);
        model.addAttribute("projectStatusReport", projectStatusReport);
        return "projects/edit-status-report";
    }

    @GetMapping("{id}/psr/{year}/{month}")
    public String editProjectStatusReport(@PathVariable("id") Long id, @PathVariable("month") int month, @PathVariable("year") Long year, Model model) {
        findProjectAndAddPsrAttributes(id, month, year, model);
        return "projects/edit-status-report";
    }

    @GetMapping("{id}/psr/{year}/{month}/view")
    public String viewProjectStatusReport(@PathVariable("id") Long id, @PathVariable("month") int month, @PathVariable("year") Long year, Model model) {
        findProjectAndAddPsrAttributes(id, month, year, model);
        return "projects/status-report/psr";
    }

    @GetMapping("{id}/psr/{year}/{month}/view/pdf")
    public String downloadProjectStatusReport(@PathVariable("id") Long id, @PathVariable("month") int month, @PathVariable("year") Long year, Model model) {
        findProjectAndAddPsrAttributes(id, month, year, model);
        return "projects/status-report/psr-pdf";
    }

    private void findProjectAndAddPsrAttributes(Long id, int month, Long year, Model model) {
        Project project = projectService.getByID(id);
        ProjectStatusReport projectStatusReport = statusReportService.getByProjectIdMonthYear(id, month, year);

        model.addAttribute("project", project);
        model.addAttribute("projectStatusReport", projectStatusReport);
    }

    @PostMapping("{id}/psr/save")
    public String saveProjectStatusReport(@PathVariable("id") Long id, ProjectStatusReport projectStatusReport, RedirectAttributes redirectAttributes, Model model) {
        if (!statusReportService.findByPsrId(projectStatusReport.getPsrId()).isPresent()) {
            if (projectService.getByID(id).getProjectStatusReports().contains(statusReportService.getByProjectIdMonthYear(id, projectStatusReport.getMonth().getValue(), projectStatusReport.getYear())))
            {
                redirectAttributes.addFlashAttribute("errorMessage", String.format("Nie można zapisać PSR. PSR dla tej daty już istnieje %d %d", projectStatusReport.getMonth().getValue(), projectStatusReport.getYear()));
                return "redirect:/projects/"+id+"/psr";
            }
        }

        Project project = projectService.getByID(id);
        projectStatusReport.setProject(project);
        project.addPSR(projectStatusReport);
        statusReportService.save(projectStatusReport);
        return "redirect:/projects/"+id+"/psr";
    }
}
