package pl.fc.app.controllers;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import pl.fc.app.enities.Project;

@Controller
@RequestMapping("/upload")
class FileUploadController {

    Path tempDirWithPrefix;

    @GetMapping()
    public String homepage(@RequestParam("id") long projectId, Model model, RedirectAttributes attributes) {
//        attributes.addFlashAttribute("projectId",projectId);
//        Project project = new Project();
//        project.setProjectId(projectId);
        model.addAttribute("id",projectId);
        return "budgets/upload";
    }

    @PostMapping("/file")
    public String uploadFile(@RequestParam("id") long projectId, @RequestParam("file") MultipartFile file, RedirectAttributes attributes) {
        {
            try {
                tempDirWithPrefix = Files.createTempDirectory("P"+projectId+"_");
//                System.out.println(tempDirWithPrefix);
            } catch (IOException e) {
                e.printStackTrace();
            }
        }

        // check if file is empty
        if (file.isEmpty()) {
            attributes.addFlashAttribute("message", "Please select a file to upload.");
            return "redirect:/";
        }

        // normalize the file path
        String fileName = StringUtils.cleanPath(file.getOriginalFilename());

        // save the file on the local file system
        try {
            Path path = Paths.get(tempDirWithPrefix +"/"+ fileName);
            Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);
            attributes.addFlashAttribute("path",path);
        } catch (IOException e) {
            e.printStackTrace();
        }

        // return success response
        attributes.addFlashAttribute("message", "You successfully uploaded " + fileName + '!');
        return "redirect:/budget/import?id="+projectId;
    }
}
