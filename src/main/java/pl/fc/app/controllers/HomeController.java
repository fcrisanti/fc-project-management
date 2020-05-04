package pl.fc.app.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
class HomeController {

    @GetMapping("/")
    public String displayAllProjects() {
        return "redirect:/projects";
    }
}
