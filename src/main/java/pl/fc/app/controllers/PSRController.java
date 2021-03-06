package pl.fc.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.threeten.extra.Quarter;
import pl.fc.app.dao.variables.ICompanyRepository;
import pl.fc.app.dao.variables.IGenesisRepository;
import pl.fc.app.dao.variables.IStatusRepository;
import pl.fc.app.enities.Project;
import pl.fc.app.enities.ProjectStatusReport;
import pl.fc.app.enities.variables.CompaniesDTO;
import pl.fc.app.enities.variables.TooltipsDTO;
import pl.fc.app.security.PermissionManager;
import pl.fc.app.services.AdvancedOptionsService;
import pl.fc.app.services.EmployeeService;
import pl.fc.app.services.ProjectService;
import pl.fc.app.services.StatusReportService;

import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/psr")
class PSRController {
    @Value("${PSR_OFFSET}")
    int OFFSET_IN_DAYS;
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
    @Autowired
    AdvancedOptionsService advancedOptionsService;

    @GetMapping("/view")
    public String displayAllPSR(Model model) {
        LocalDate today = LocalDate.now();
        int currentQuarterMinusOffset = Quarter.ofMonth(today.minusDays(OFFSET_IN_DAYS).getMonthValue()).getValue();
        int currentYearMinusOffset = today.minusDays(OFFSET_IN_DAYS).getYear();
        return "redirect:view/list/" + currentYearMinusOffset + "/" + currentQuarterMinusOffset;
    }

    @GetMapping("/view/vig")
    public String displayVigPSR(Model model) {
        LocalDate today = LocalDate.now();
        int currentQuarterMinusOffset = Quarter.ofMonth(today.minusDays(OFFSET_IN_DAYS).getMonthValue()).getValue();
        int currentYearMinusOffset = today.minusDays(OFFSET_IN_DAYS).getYear();
        return "redirect:vig/" + currentYearMinusOffset + "/" + currentQuarterMinusOffset;
    }

    @GetMapping("/view/list/{year}/{quarter}")
    public String displayPSRbyMonthAndYear(Model model, @PathVariable("quarter") int quarter, @PathVariable("year") long year, HttpSession session) {
        List<ProjectStatusReport> projectStatusReports = statusReportService.getAllByQuarterAndYear(quarter, year);
        List<Project> projects = projectService.getAllNonHavingPsrByQuarterAndYear(quarter, year);
        model.addAttribute("projectStatusReports", projectStatusReports);
        model.addAttribute("projects", projects);
        model.addAttribute("quarter", quarter);
        model.addAttribute("year", year);
        session.setAttribute("vig", "false");
        return "projects/status-report/list-status-reports";
    }

    @GetMapping("/view/vig/{year}/{quarter}")
    public String displayVIGPSRbyMonthAndYear(Model model, @PathVariable("quarter") int quarter, @PathVariable("year") long year, HttpSession session) {
        List<ProjectStatusReport> projectStatusReports = statusReportService.getAllByQuarterAndVIGCompany(quarter, year);
        List<Project> projects = projectService.getAllVIGNonHavingPsrByQuarterAndYear(quarter, year);
        model.addAttribute("projectStatusReports", projectStatusReports);
        model.addAttribute("projects", projects);
        model.addAttribute("quarter", quarter);
        model.addAttribute("year", year);
        session.setAttribute("vig", "true");
        return "projects/status-report/vig-list-status-reports";
    }

    @GetMapping("/view/vig-open/{year}/{quarter}")
    public String displayFullVIGPSRbyMonthAndYear(Model model, @PathVariable("quarter") int quarter, @PathVariable("year") long year, HttpSession session) {
        List<ProjectStatusReport> projectStatusReports = statusReportService.getAllByQuarterAndVIGCompany(quarter, year);
        model.addAttribute("projectStatusReports", projectStatusReports);
        model.addAttribute("quarter", quarter);
        model.addAttribute("year", year);
        model.addAttribute("allCompanies", new CompaniesDTO(companyRepository.findAll()));
        session.setAttribute("vig", "true");
        return "projects/status-report/vig-all-status-reports";
    }

    @GetMapping("/view/open/{year}/{quarter}")
    public String displayFullPSRbyMonthAndYear(Model model, @PathVariable("quarter") int quarter, @PathVariable("year") long year, HttpSession session) {
        List<ProjectStatusReport> projectStatusReports = statusReportService.getAllByQuarterAndYear(quarter, year);
        model.addAttribute("projectStatusReports", projectStatusReports);
        model.addAttribute("quarter", quarter);
        model.addAttribute("year", year);
        model.addAttribute("allCompanies", new CompaniesDTO(companyRepository.findAll()));
        session.setAttribute("vig", "false");
        return "projects/status-report/all-status-reports";
    }

    @GetMapping("{id}")
    public String newProjectStatusReport(@PathVariable("id") Long id, ProjectStatusReport projectStatusReport, RedirectAttributes redirectAttributes, Model model) {
        LocalDate today = LocalDate.now();
        int currentQuarterMinusOffset = Quarter.ofMonth(today.minusDays(OFFSET_IN_DAYS).getMonthValue()).getValue();
        int currentYearMinusOffset = today.minusDays(OFFSET_IN_DAYS).getYear();
        return "redirect:/psr/" + id + "/" + currentYearMinusOffset + "/" + currentQuarterMinusOffset;
    }

    @GetMapping("/{id}/{year}/{quarter}")
    public String editProjectStatusReportIfCurrentQuarter(@PathVariable("id") Long id, @PathVariable("quarter") int quarter, @PathVariable("year") Long year, Model model, RedirectAttributes redirectAttributes, HttpServletResponse response) {
        if (permissionManager.userAllowed("psr-edit") || permissionManager.userAllowed(id)) {
            LocalDate today = LocalDate.now();
            int currentQuarterMinusOffset = Quarter.ofMonth(today.minusDays(OFFSET_IN_DAYS).getMonthValue()).getValue();
            int currentYearMinusOffset = today.minusDays(OFFSET_IN_DAYS).getYear();
            if (currentQuarterMinusOffset == quarter && currentYearMinusOffset == year) {
                findNewProjectAndAddPsrAttributes(id, quarter, year, model);
                findAndAddPreviousPsrAttributes(id, model);
                model.addAttribute("tooltips", new TooltipsDTO(advancedOptionsService.getAll()));
                return "projects/edit-new-status";
            }
            redirectAttributes.addFlashAttribute("errorMessage", "Project Status Report jest zablokowany do edycji. Można edytować PSR kwartału w trakcie i do " + OFFSET_IN_DAYS + " dni po jego zakończeniu.");
            return "redirect:/psr/view/" + id + "/" + year + "/" + quarter;
        } else {
            response.setStatus(403);
            return "errorpages/error-403";
        }
    }

    @GetMapping("/{id}/{year}/{quarter}/force")
    public String forceEditProjectStatusReport(@PathVariable("id") Long id, @PathVariable("quarter") int quarter, @PathVariable("year") Long year, Model model, RedirectAttributes redirectAttributes, HttpServletResponse response) {
        if (permissionManager.userAllowed("psr-any-edit")) {
            findNewProjectAndAddPsrAttributes(id, quarter, year, model);
            findAndAddPreviousPsrAttributes(id, model);
            model.addAttribute("tooltips", new TooltipsDTO(advancedOptionsService.getAll()));
            return "projects/edit-new-status";
        } else {
            response.setStatus(403);
            return "errorpages/error-403";
        }
    }

    @GetMapping("/view/{id}/{year}/{quarter}")
    public String viewNewProjectStatusReport(@PathVariable("id") Long id, @PathVariable("quarter") int quarter, @PathVariable("year") Long year, Model model) {
        findNewProjectAndAddPsrAttributes(id, quarter, year, model);
        return "projects/view-new-status";
    }

    private void findNewProjectAndAddPsrAttributes(Long id, int quarter, Long year, Model model) {
        Optional<ProjectStatusReport> maybeStatusReport = Optional.empty();
        if (statusRepository.count() > 0) {
            maybeStatusReport = statusReportService.findByProjectIdQuarterYear(id, quarter, year);
        }
        Project project = projectService.getByID(id);
        ProjectStatusReport projectStatusReport;
        if (maybeStatusReport.isPresent()) {
            projectStatusReport = maybeStatusReport.get();
        } else {
            projectStatusReport = new ProjectStatusReport();
            projectStatusReport.setYear(year);
            projectStatusReport.setQuarter(Quarter.of(quarter));
        }
        if (project != null) {
            model.addAttribute("project", project);
            model.addAttribute("projectStatusReport", projectStatusReport);
            model.addAttribute("allCompanies", new CompaniesDTO(companyRepository.findAll()));
            model.addAttribute("costyear", project.getExpensesByYear());
        } else
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Motyla noga! Nie znalazłem takiego projektu :(");
    }

    private void findAndAddPreviousPsrAttributes(Long id, Model model) {
        LocalDate today = LocalDate.now().minusDays(OFFSET_IN_DAYS);
        Optional<ProjectStatusReport> maybeStatusReport;
        int index = 1;
        do {
            int previousQuarter = Quarter.ofMonth(today.getMonthValue()).minus(index).getValue();
            long previousPSRYear = previousQuarter == 4 ? today.getYear() - 1 : today.getYear();
            if (Quarter.ofMonth(today.getMonthValue()) == Quarter.Q1) {
                previousPSRYear = today.minusYears(1).getYear();
            }
            maybeStatusReport = statusReportService.findByProjectIdQuarterYear(id, previousQuarter, previousPSRYear);
            index++;
        } while (!maybeStatusReport.isPresent() && index < 4);
        if (maybeStatusReport.isPresent()) {
            ProjectStatusReport projectStatusReport = maybeStatusReport.get();
            model.addAttribute("previousProjectStatusReport", projectStatusReport);
        }
    }

    @PostMapping("{id}/save")
    public String saveProjectStatusReport(@PathVariable("id") Long id, ProjectStatusReport
            projectStatusReport, RedirectAttributes redirectAttributes, Model model) {
        ProjectStatusReport foundProjectStatusReport = statusReportService.findByProjectIdMonthYear(id, projectStatusReport.getMonth().getValue(), projectStatusReport.getYear()).orElse(projectStatusReport);

        if (projectStatusReport.getPsrId() == 0 || foundProjectStatusReport.getPsrId() != projectStatusReport.getPsrId()) {
            if (projectService.getByID(id).getProjectStatusReports().contains(foundProjectStatusReport)) {
                redirectAttributes.addFlashAttribute("errorMessage", String.format("PSR dla %d/%d już istnieje. Zmień datę przed zapisem lub edytuj istniejący PSR.", projectStatusReport.getMonth().getValue(), projectStatusReport.getYear()));
                redirectAttributes.addFlashAttribute("projectStatusReport", projectStatusReport);
                return "redirect:/psr/" + id;
            }
        }

        Project project = projectService.getByID(id);
        projectStatusReport.setProject(project);
        project.addPSR(projectStatusReport);
        statusReportService.save(projectStatusReport);
        return "redirect:/psr/" + id + "/" + projectStatusReport.getYear() + "/" + projectStatusReport.getMonth().getValue();
    }

    @PostMapping("{id}/savenew")
    public String saveNewProjectStatusReport(@PathVariable("id") Long id, ProjectStatusReport projectStatusReport, RedirectAttributes redirectAttributes, Model model) {
        Project project = projectService.getByID(id);
        if (project != null) {
            project.addPSR(projectStatusReport);
            projectStatusReport.setProject(project);
            statusReportService.save(projectStatusReport);
        }
        return "redirect:/psr/view/" + id + "/" + projectStatusReport.getYear() + "/" + projectStatusReport.getQuarter().getValue();
    }
}
