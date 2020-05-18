package pl.fc.app.controllers;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.File;
import java.io.IOException;

@Controller
class HomeController {
    @GetMapping("/")
    public String displayAllProjects() {
        return "redirect:/projects";
    }
}
