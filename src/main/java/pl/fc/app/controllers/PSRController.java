package pl.fc.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import pl.fc.app.dao.variables.ICompanyRepository;
import pl.fc.app.dao.variables.IGenesisRepository;
import pl.fc.app.dao.variables.IStatusRepository;
import pl.fc.app.enities.Project;
import pl.fc.app.enities.ProjectStatusReport;
import pl.fc.app.services.EmployeeService;
import pl.fc.app.services.ProjectService;
import pl.fc.app.services.StatusReportService;

import java.util.Calendar;
import java.util.List;

@Controller
@RequestMapping("/psr")
class PSRController {

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
    public String displayAllPSR(Model model) {
        int month = Calendar.getInstance().get(Calendar.MONTH);
        int year = Calendar.getInstance().get(Calendar.YEAR);
        return "redirect:psr/"+year+"/"+month;
    }

    @GetMapping("/{year}/{month}")
    public String displayPSRbyMonthAndYear(Model model, @PathVariable("month") int month, @PathVariable("year") long year) {
        List<ProjectStatusReport> projectStatusReports = statusReportService.getAllByMonthAndYear(month,year);
        List<Project> projects = projectService.getAllNonHavingPsr(month,year);
        model.addAttribute("projectStatusReports", projectStatusReports);
        model.addAttribute("projects", projects);
        model.addAttribute("month",month);
        model.addAttribute("year",year);
        return "projects/status-report/list-status-reports";
    }

    @GetMapping("{id}")
    public String newProjectStatusReport(@PathVariable("id") Long id, ProjectStatusReport projectStatusReport, RedirectAttributes redirectAttributes, Model model) {
        Project project = projectService.getByID(id);
        redirectAttributes.addAttribute("projectStatusReport",projectStatusReport);
        model.addAttribute("project", project);
        return "projects/edit-status-report";
    }

    @GetMapping("{id}/{year}/{month}")
    public String editProjectStatusReport(@PathVariable("id") Long id, @PathVariable("month") int month, @PathVariable("year") Long year, Model model) {
        findProjectAndAddPsrAttributes(id, month, year, model);
        return "projects/edit-status-report";
    }

    @GetMapping("/new/{id}/{year}/{month}")
    public String editNewProjectStatusReport(@PathVariable("id") Long id, @PathVariable("month") int month, @PathVariable("year") Long year, Model model) {
        findProjectAndAddPsrAttributes(id, month, year, model);
        return "projects/edit-new-status";
    }

    @GetMapping("{id}/{year}/{month}/view")
    public String viewProjectStatusReport(@PathVariable("id") Long id, @PathVariable("month") int month, @PathVariable("year") Long year, Model model) {
        findProjectAndAddPsrAttributes(id, month, year, model);
        return "projects/status-report/psr";
    }

    @GetMapping("{id}/{year}/{month}/delete")
    public String deleteProjectStatusReport(@PathVariable("id") Long id, @PathVariable("month") int month, @PathVariable("year") Long year, Model model) {
        deleteProjectByAddPsrAttributes(id, month, year, model);
        return "projects/edit-status-report";
    }

    @GetMapping("{id}/{year}/{month}/view/pdf")
    public String downloadPDFProjectStatusReport(@PathVariable("id") Long id, @PathVariable("month") int month, @PathVariable("year") Long year, Model model) {
        findProjectAndAddPsrAttributes(id, month, year, model);
        return "projects/status-report/psr-pdf";
    }

    @GetMapping("{id}/{year}/{month}/view/ppt")
    public String downloadPPTProjectStatusReport(@PathVariable("id") Long id, @PathVariable("month") int month, @PathVariable("year") Long year, Model model) {
        findProjectAndAddPsrAttributes(id, month, year, model);
        return "projects/status-report/psr-ppt";
    }

    private void findProjectAndAddPsrAttributes(Long id, int month, Long year, Model model) {
        Project project = projectService.getByID(id);
        ProjectStatusReport projectStatusReport = statusReportService.getByProjectIdMonthYear(id, month, year);

        model.addAttribute("project", project);
        model.addAttribute("projectStatusReport", projectStatusReport);
    }

    void deleteProjectByAddPsrAttributes(Long id, int month, Long year, Model model) {
        Project project = projectService.getByID(id);
        statusReportService.deleteByProjectIdMonthYear(id, month, year);
        ProjectStatusReport projectStatusReport = new ProjectStatusReport();
        model.addAttribute("projectStatusReport", projectStatusReport);
        model.addAttribute("project", project);
    }

    @PostMapping("{id}/save")
    public String saveProjectStatusReport(@PathVariable("id") Long id, ProjectStatusReport projectStatusReport, RedirectAttributes redirectAttributes, Model model) {
        ProjectStatusReport foundProjectStatusReport = statusReportService.findByProjectIdMonthYear(id, projectStatusReport.getMonth().getValue(), projectStatusReport.getYear()).orElse(projectStatusReport);

        if (projectStatusReport.getPsrId()==0 || foundProjectStatusReport.getPsrId()!=projectStatusReport.getPsrId()) {
            if (projectService.getByID(id).getProjectStatusReports().contains(foundProjectStatusReport))
            {
                redirectAttributes.addFlashAttribute("errorMessage", String.format("PSR dla %d/%d już istnieje. Zmień datę przed zapisem lub edytuj istniejący PSR.", projectStatusReport.getMonth().getValue(), projectStatusReport.getYear()));
                redirectAttributes.addFlashAttribute("projectStatusReport",projectStatusReport);
                return "redirect:/psr/"+id;
            }
        }

        Project project = projectService.getByID(id);
        projectStatusReport.setProject(project);
        project.addPSR(projectStatusReport);
        statusReportService.save(projectStatusReport);
        return "redirect:/psr/"+id+"/"+projectStatusReport.getYear()+"/"+projectStatusReport.getMonth().getValue();
    }
}
