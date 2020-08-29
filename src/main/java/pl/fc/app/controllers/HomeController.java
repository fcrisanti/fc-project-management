package pl.fc.app.controllers;

import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import pl.fc.app.security.activedirectory.PersonDAO;

@Controller
class HomeController {
    @GetMapping("/")
    public String displayAllProjects() {
     return "redirect:/projects";
    }
}
