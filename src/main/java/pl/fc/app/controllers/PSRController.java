package pl.fc.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.threeten.extra.Quarter;
import pl.fc.app.dao.variables.ICompanyRepository;
import pl.fc.app.dao.variables.IGenesisRepository;
import pl.fc.app.dao.variables.IStatusRepository;
import pl.fc.app.enities.Project;
import pl.fc.app.enities.ProjectStatusReport;
import pl.fc.app.security.PermissionManager;
import pl.fc.app.services.EmployeeService;
import pl.fc.app.services.ProjectService;
import pl.fc.app.services.StatusReportService;

import javax.servlet.http.HttpServletResponse;
import java.time.LocalDate;
import java.util.Calendar;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/psr")
class PSRController {

    final int OFFSET_IN_DAYS = 5;
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
    public String displayAllPSR(Model model) {
        LocalDate today = LocalDate.now();
        int currentQuarterMinusOffset = Quarter.ofMonth(today.minusDays(OFFSET_IN_DAYS).getMonthValue()).getValue();
        int currentYearMinusOffset = today.minusDays(OFFSET_IN_DAYS).getYear();
        return "redirect:psr/" + currentYearMinusOffset + "/" + currentQuarterMinusOffset;
    }

//    @GetMapping("/{year}/{month}")
//    public String displayPSRbyMonthAndYear(Model model, @PathVariable("month") int month, @PathVariable("year") long year) {
//        List<ProjectStatusReport> projectStatusReports = statusReportService.getAllByMonthAndYear(month, year);
//        List<Project> projects = projectService.getAllNonHavingPsr(month, year);
//        model.addAttribute("projectStatusReports", projectStatusReports);
//        model.addAttribute("projects", projects);
//        model.addAttribute("month", month);
//        model.addAttribute("year", year);
//        return "projects/status-report/list-status-reports";
//    }

    @GetMapping("/{year}/{quarter}")
    public String displayPSRbyMonthAndYear(Model model, @PathVariable("quarter") int quarter, @PathVariable("year") long year) {
        List<ProjectStatusReport> projectStatusReports = statusReportService.getAllByQuarterAndYear(quarter, year);
        List<Project> projects = projectService.getAllNonHavingPsrByQuarterAndYear(quarter, year);
        model.addAttribute("projectStatusReports", projectStatusReports);
        model.addAttribute("projects", projects);
        model.addAttribute("quarter", quarter);
        model.addAttribute("year", year);
        return "projects/status-report/list-status-reports";
    }

    @GetMapping("{id}")
    public String newProjectStatusReport(@PathVariable("id") Long id, ProjectStatusReport projectStatusReport, RedirectAttributes redirectAttributes, Model model) {
//        Project project = projectService.getByID(id);
//        redirectAttributes.addAttribute("projectStatusReport", projectStatusReport);
//        model.addAttribute("project", project);
        LocalDate today = LocalDate.now();
        int currentQuarterMinusOffset = Quarter.ofMonth(today.minusDays(OFFSET_IN_DAYS).getMonthValue()).getValue();
        int currentYearMinusOffset = today.minusDays(OFFSET_IN_DAYS).getYear();

//        findNewProjectAndAddPsrAttributes(id, model);
        return "redirect:/psr/"+id+"/"+currentYearMinusOffset+"/"+currentQuarterMinusOffset;
    }

//    @GetMapping("{id}/{year}/{month}")
//    public String editProjectStatusReport(@PathVariable("id") Long id, @PathVariable("month") int month, @PathVariable("year") Long year, Model model) {
//        findProjectAndAddPsrAttributes(id, month, year, model);
//        return "projects/edit-status-report";
//    }

//    @GetMapping("{id}/{year}/{quarter}")
//    public String editProjectStatusReport(@PathVariable("id") Long id, @PathVariable("quarter") int quarter, @PathVariable("year") Long year, Model model) {
//        findNewProjectAndAddPsrAttributes(id, quarter, year, model);
//        return "projects/edit-new-status";
//    }

    @GetMapping("/{id}/{year}/{quarter}")
    public String editProjectStatusReportIfCurrentQuarter(@PathVariable("id") Long id, @PathVariable("quarter") int quarter, @PathVariable("year") Long year, Model model, RedirectAttributes redirectAttributes, HttpServletResponse response) {
        if(permissionManager.userAllowed("psr-edit") || permissionManager.userAllowed(id)) {
        LocalDate today = LocalDate.now();
        int currentQuarterMinusOffset = Quarter.ofMonth(today.minusDays(OFFSET_IN_DAYS).getMonthValue()).getValue();
        int currentYearMinusOffset = today.minusDays(OFFSET_IN_DAYS).getYear();
        if(currentQuarterMinusOffset == quarter && currentYearMinusOffset == year) {
            findNewProjectAndAddPsrAttributes(id, quarter, year, model);
            findAndAddPreviousPsrAttributes(id, model);
            return "projects/edit-new-status";
        }
        redirectAttributes.addFlashAttribute("errorMessage", "Project Status Report jest zablokowany do edycji. Można edytować PSR kwartału w trakcie i do 5 dni po jego zakończeniu.");
        return "redirect:/psr/view/"+id+"/"+year+"/"+quarter;
        } else {
            response.setStatus(403);
            return "errorpages/error-403";
        }
    }

    @GetMapping("/{id}/{year}/{quarter}/force")
    public String forceEditProjectStatusReport(@PathVariable("id") Long id, @PathVariable("quarter") int quarter, @PathVariable("year") Long year, Model model, RedirectAttributes redirectAttributes, HttpServletResponse response) {
        if(permissionManager.userAllowed("psr-any-edit")) {
            findNewProjectAndAddPsrAttributes(id, quarter, year, model);
            findAndAddPreviousPsrAttributes(id, model);
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

//    @GetMapping("{id}/{year}/{month}/view")
//    public String viewProjectStatusReport(@PathVariable("id") Long id, @PathVariable("month") int month, @PathVariable("year") Long year, Model model) {
//        findProjectAndAddPsrAttributes(id, month, year, model);
//        return "projects/status-report/psr";
//    }

//    @GetMapping("{id}/{year}/{month}/delete")
//    public String deleteProjectStatusReport(@PathVariable("id") Long id, @PathVariable("month") int month, @PathVariable("year") Long year, Model model) {
//        deleteProjectByAddPsrAttributes(id, month, year, model);
//        return "projects/edit-status-report";
//    }

//    @GetMapping("{id}/{year}/{month}/view/pdf")
//    public String downloadPDFProjectStatusReport(@PathVariable("id") Long id, @PathVariable("month") int month, @PathVariable("year") Long year, Model model) {
//        findProjectAndAddPsrAttributes(id, month, year, model);
//        return "projects/status-report/psr-pdf";
//    }
//
//    @GetMapping("{id}/{year}/{month}/view/ppt")
//    public String downloadPPTProjectStatusReport(@PathVariable("id") Long id, @PathVariable("month") int month, @PathVariable("year") Long year, Model model) {
//        findProjectAndAddPsrAttributes(id, month, year, model);
//        return "projects/status-report/psr-ppt";
//    }

    private void findProjectAndAddPsrAttributes(Long id, int month, Long year, Model model) {
        Project project = projectService.getByID(id);
        ProjectStatusReport projectStatusReport = statusReportService.getByProjectIdMonthYear(id, month, year);

        model.addAttribute("project", project);
        model.addAttribute("projectStatusReport", projectStatusReport);
    }

    private void findNewProjectAndAddPsrAttributes(Long id, int quarter, Long year, Model model) {
        Optional<ProjectStatusReport> maybeStatusReport = Optional.empty();
        if(statusRepository.count()>0) {
            maybeStatusReport = statusReportService.findByProjectIdQuarterYear(id, quarter, year);
        } 
        Project project = projectService.getByID(id);
        ProjectStatusReport projectStatusReport = new ProjectStatusReport();
        if (maybeStatusReport.isPresent()) {
            projectStatusReport = maybeStatusReport.get();
        } else {
            projectStatusReport = new ProjectStatusReport();
            projectStatusReport.setYear(year);
            projectStatusReport.setQuarter(Quarter.of(quarter));
        }
        model.addAttribute("project", project);
        model.addAttribute("projectStatusReport", projectStatusReport);
    }

    private void findAndAddPreviousPsrAttributes(Long id, Model model) {
        LocalDate today = LocalDate.now();
        int previousQuarter = Quarter.ofMonth(today.getMonthValue()).minus(1).getValue();
        long previousPSRYear = today.getYear();
        if(Quarter.ofMonth(today.getMonthValue()) == Quarter.Q1) {
            previousPSRYear = today.minusYears(1).getYear();
        }
        Optional<ProjectStatusReport> maybeStatusReport = statusReportService.findByProjectIdQuarterYear(id, previousQuarter, previousPSRYear);
        if (maybeStatusReport.isPresent()) {
            ProjectStatusReport projectStatusReport = maybeStatusReport.get();
            model.addAttribute("previousProjectStatusReport", projectStatusReport);
        }
    }

    void deleteProjectByAddPsrAttributes(Long id, int month, Long year, Model model) {
        Project project = projectService.getByID(id);
        statusReportService.deleteByProjectIdMonthYear(id, month, year);
        ProjectStatusReport projectStatusReport = new ProjectStatusReport();
        model.addAttribute("projectStatusReport", projectStatusReport);
        model.addAttribute("project", project);
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
//        ProjectStatusReport foundProjectStatusReport = statusReportService.findByProjectIdMonthYear(id, projectStatusReport.getMonth().getValue(), projectStatusReport.getYear()).orElse(projectStatusReport);
//
//        if (projectStatusReport.getPsrId() == 0 || foundProjectStatusReport.getPsrId() != projectStatusReport.getPsrId()) {
//            if (projectService.getByID(id).getProjectStatusReports().contains(foundProjectStatusReport)) {
//                redirectAttributes.addFlashAttribute("errorMessage", String.format("PSR dla %d/%d już istnieje. Zmień datę przed zapisem lub edytuj istniejący PSR.", projectStatusReport.getMonth().getValue(), projectStatusReport.getYear()));
//                redirectAttributes.addFlashAttribute("projectStatusReport", projectStatusReport);
//                return "redirect:/psr/" + id;
//            }
//        }
        Project project = projectService.getByID(id);
        projectStatusReport.setProject(project);
        project.addPSR(projectStatusReport);
        statusReportService.save(projectStatusReport);
        return "redirect:/psr/view/" + id + "/" + projectStatusReport.getYear() + "/" + projectStatusReport.getQuarter().getValue();
    }

}
