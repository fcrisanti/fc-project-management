package pl.fc.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import pl.fc.app.dao.IUserRepository;
import pl.fc.app.dao.variables.ICompanyRepository;
import pl.fc.app.dao.variables.IGenesisRepository;
import pl.fc.app.dao.variables.IStatusRepository;
import pl.fc.app.dao.variables.ITooltipRepository;
import pl.fc.app.enities.UserAccount;
import pl.fc.app.enities.variables.Company;
import pl.fc.app.enities.variables.Genesis;
import pl.fc.app.enities.variables.Status;
import pl.fc.app.enities.variables.Tooltip;
import pl.fc.app.enities.variables.TooltipsDTO;
import pl.fc.app.security.PermissionManager;
import pl.fc.app.services.AdvancedOptionsService;
import pl.fc.app.services.EmployeeService;
import pl.fc.app.services.ProjectService;

import javax.jws.soap.SOAPBinding;
import javax.servlet.http.HttpServletResponse;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Controller
@RequestMapping("/options")
class AdvancedOptionsController {

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
    IUserRepository userRepository;

    @Autowired
    PermissionManager permissionManager;

    @Autowired
    AdvancedOptionsService advancedOptionsService;

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
    @GetMapping(value = "/removeproject/")
    public String removeProject(@RequestParam Long id) {
        projectService.removeProjectBySapNo(id);
        return "redirect:/options";
    }

    @Transactional
    @GetMapping("/removepmo")
    public String removeEmployee(@RequestParam String firstName, String lastName) {
        employeeService.removeEmployeeByFirstNameAndSecondName(firstName, lastName);
        return "redirect:/options";
    }

    @GetMapping
    public String displayAll(Model model, HttpServletResponse response) {
        if(permissionManager.userAllowed("admin")) {
            List<Company> companies = companyRepository.findAll();
            List<Status> statuses = statusRepository.findAll();
            List<Genesis> genesis = genesisRepository.findAll();

            Company company = new Company();
            Genesis genesisType = new Genesis();
            Status status = new Status();

            model.addAttribute("company", company);
            model.addAttribute("genesisType", genesisType);
            model.addAttribute("status", status);

            model.addAttribute("companies", companies);
            model.addAttribute("genesis", genesis);
            model.addAttribute("statuses", statuses);

            List<UserAccount> userAccounts = userRepository.findAll();
            UserAccount userAccount = new UserAccount();
            model.addAttribute("users", userAccounts);
            model.addAttribute("userAccount", userAccount);

            List<String> areas = new ArrayList<>(Arrays.asList("advanced-view", "project-edit", "psr-edit", "psr-any-edit", "admin"));
            model.addAttribute("areas", areas);

//            model.addAttribute("tooltips",advancedOptionsService.setAndGet());
            model.addAttribute("tooltipsForm", new TooltipsDTO(advancedOptionsService.setAndGet()));

            return "options/advanced-options";
        } else {
            response.setStatus(403);
            return "errorpages/error-403";
        }
    }

    @PostMapping("/user")
    public String addOrModifyUser(UserAccount userAccount) {
          if (userRepository.findByUserName(userAccount.getUserName()).isPresent()) {
              UserAccount user = userRepository.findByUserName(userAccount.getUserName()).get();
              user.setName(userAccount.getName());
              user.setSurname(userAccount.getSurname());
              user.setUserName(userAccount.getUserName());
              user.setAreas(userAccount.getAreas());
              userRepository.save(user);
          } else {
              userRepository.save(userAccount);
          }
        return "redirect:/options";
    }

    @PostMapping("/tooltips")
    public String saveTooltips(@ModelAttribute TooltipsDTO tooltips) {
            advancedOptionsService.saveAll(tooltips.getTooltips());
            System.out.println(advancedOptionsService.getAll());
        return "redirect:/options";
    }

    @PostMapping("/deleteuser")
    public String deleteUser(UserAccount userAccount) {
        if (userRepository.findByUserName(userAccount.getUserName()).isPresent()) {
            UserAccount user = userRepository.findByUserName(userAccount.getUserName()).get();
            userRepository.delete(user);
        }
        return "redirect:/options";
    }

}
