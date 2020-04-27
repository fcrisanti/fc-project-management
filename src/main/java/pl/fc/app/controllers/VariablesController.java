package pl.fc.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.server.ResponseStatusException;
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

import javax.transaction.Transactional;
import javax.websocket.server.PathParam;
import java.util.List;
import java.util.Optional;

@Controller
@RequestMapping("/options")
class VariablesController {

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

    @PostMapping("/addcompany")
    public String addCompany(Company company, Model model) {
        companyRepository.save(company);
        return "redirect:/options";
    }

    @PostMapping("/addstatus")
    public String addStatus(Status status, Model model) {
        statusRepository.save(status);
        return "redirect:/options";
    }

    @PostMapping("/addgenesis")
    public String addGenesis(Genesis genesis, Model model) {
        genesisRepository.save(genesis);
        return "redirect:/options";
    }

    @PostMapping("/removecompany")
    public String removeCompany(Company company, Model model) {
        companyRepository.delete(company);
        return "redirect:/options";
    }

    @PostMapping("/removestatus")
    public String removeStatus(Status status, Model model) {
        statusRepository.delete(status);
        return "redirect:/options";
    }

    @PostMapping("/removegenesis")
    public String removeGenesis(Genesis genesis, Model model) {
        genesisRepository.delete(genesis);
        return "redirect:/options";
    }

    @Transactional
    @GetMapping(value="/removeproject/")
    public String removeProject(@RequestParam Long id) {
        projectService.removeProjectBySapNo(id);
        return "redirect:/options";
    }

    @Transactional
    @GetMapping("/removepmo")
    public String removeEmployee(@RequestParam String firstName, String lastName) {
        employeeService.removeEmployeeByFirstNameAndSecondName(firstName,lastName);
        return "redirect:/options";
    }

    @GetMapping
    public String displayAll(Model model) {
        List<Company> companies = companyRepository.findAll();
        List<Status> statuses = statusRepository.findAll();
        List<Genesis> genesis = genesisRepository.findAll();

        Company company = new Company();
        Genesis genesisType = new Genesis();
        Status status = new Status();
//        String sapNo = new String();
//        String firstName = new String();
//        String lastName = new String();
//
//        model.addAttribute("sapNo",sapNo);
//        model.addAttribute("firstName",firstName);
//        model.addAttribute("lastName",lastName);

        model.addAttribute("company",company);
        model.addAttribute("genesisType", genesisType);
        model.addAttribute("status", status);

        model.addAttribute("companies",companies);
        model.addAttribute("genesis",genesis);
        model.addAttribute("statuses",statuses);
        return "options/variable-options";
    }

}
