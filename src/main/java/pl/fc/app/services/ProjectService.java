package pl.fc.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.fc.app.dao.IProjectRepository;
import pl.fc.app.dto.IProjectStatus;
import pl.fc.app.enities.Project;

import java.util.List;

@Service
public class ProjectService {

    @Autowired
    IProjectRepository projectRepository;

    public void save(Project project) {
        projectRepository.save(project);
    }

    public List<Project> getAll() {
       return projectRepository.findAll();
    }

    public List<IProjectStatus> projectStatus() {
        return projectRepository.projectStatus();
    }
}
