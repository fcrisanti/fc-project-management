package pl.fc.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import pl.fc.app.dao.ICostRepository;
import pl.fc.app.dao.variables.ICompanyRepository;
import pl.fc.app.dao.variables.IGenesisRepository;
import pl.fc.app.dao.variables.IStatusRepository;
import pl.fc.app.enities.Cost;
import pl.fc.app.enities.CostDTO;
import pl.fc.app.enities.PMCostCategoryDTO;
import pl.fc.app.enities.Project;
import pl.fc.app.enities.variables.Company;
import pl.fc.app.services.EmployeeService;
import pl.fc.app.services.ProjectService;
import pl.fc.app.services.StatusReportService;

import javax.transaction.Transactional;
import java.math.BigInteger;
import java.util.List;

@Controller
@RequestMapping("/budget")
class BudgetController {

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
    ICostRepository costRepository;

    @GetMapping("/add")
    public String addCost(Model model) {
        Cost cost = new Cost();

        model.addAttribute("idWithNames", projectService.getIdWithNames().values());

        List<Company> allCompanies = companyRepository.findAll();
        model.addAttribute("allCompanies", allCompanies);

        model.addAttribute("cost", cost);
        return "budgets/edit-cost";
    }

    @GetMapping("/savemultiple")
    public String saveCost(List<Cost> costs, Model model) {
        for (Cost cost : costs) {
            costRepository.save(cost);
        }
        return "redirect:/projects";
    }

    @GetMapping
    public String displayProjectCosts(@RequestParam("id") long projectId, Model model) {
        List<Company> allCompanies = companyRepository.findAll();
        model.addAttribute("allCompanies", allCompanies);
        Project project = projectService.findByID(projectId).get();
        if (project.getExpenses().isEmpty()) {
            project.addCost(new Cost());
        }
        model.addAttribute("costs", project.getExpenses());
        model.addAttribute("project", project);

        return "budgets/list-costs";
    }

    @GetMapping("/costcat")
    public String displayProjectCostCategories(@RequestParam("id") long projectId, Model model) {

        Project project = projectService.findByID(projectId).get();
        if (project.getPMCostCategory().isEmpty()) {
            project.getPMCostCategory().put("Default cost category", BigInteger.ZERO);
        }
        model.addAttribute("costcat", project.getPMCostCategory());
        model.addAttribute("project", project);
        return "budgets/list-categories";
    }

    @PostMapping("/{projectId}/save")
    @Transactional
    public String saveProjectCosts(@PathVariable("projectId") long projectId, @RequestBody CostDTO[] costDTO, Model model) {
        Project project = projectService.findByID(projectId).get();

        costRepository.deleteAllByProject(project);

        for (CostDTO dto : costDTO) {
            Cost cost = Cost.create(dto);
            cost.setProject(project);
            costRepository.save(cost);
            project.addCost(cost);
        }

        return "redirect:/budgets/list-costs";
    }

    @PostMapping("/{projectId}/savecat")
    @Transactional
    public String saveProjectCostCategories(@PathVariable("projectId") long projectId, @RequestBody PMCostCategoryDTO[] pmCostCategoryDTOS, Model model) {
        Project project = projectService.findByID(projectId).get();

        project.getPMCostCategory().clear();

        for (PMCostCategoryDTO dto : pmCostCategoryDTOS) {
            project.getPMCostCategory().put(dto.categoryName, new BigInteger(dto.categoryBudget.replaceAll("\\s", "")));
        }

        projectService.save(project);

        return "redirect:/budgets/list-categories";
    }
}