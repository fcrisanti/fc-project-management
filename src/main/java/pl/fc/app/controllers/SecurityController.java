package pl.fc.app.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import pl.fc.app.enities.UserAccount;
import pl.fc.app.services.UserService;

@Controller
@RequestMapping("/register")
class SecurityController {

    @Autowired
    BCryptPasswordEncoder passwordEncoder;

    @Autowired
    UserService userService;

    @GetMapping
    public String register(Model model) {
        UserAccount userAccount = new UserAccount();
        model.addAttribute("userAccount", userAccount);
        return "security/register";
    }

    @PostMapping("/save")
    public String saveUser(Model model, UserAccount userAccount) {
        userAccount.setPassword(passwordEncoder.encode(userAccount.getPassword()));
        userService.save(userAccount);
        return "redirect:/";
    }

}
