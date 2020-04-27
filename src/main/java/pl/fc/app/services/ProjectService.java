package pl.fc.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.fc.app.dao.IProjectRepository;
import pl.fc.app.dto.IProjectStatus;
import pl.fc.app.enities.Project;

import java.util.List;
import java.util.Optional;

@Service
public class ProjectService {

    @Autowired
    IProjectRepository projectRepository;

    public void save(Project project) {
        projectRepository.save(project);
    }

    public void removeProjectBySapNo(Long sapNo) {
        projectRepository.removeProjectBySapNo(sapNo);
    }

    public List<Project> getAll() {
       return projectRepository.findAll();
    }

    public List<IProjectStatus> projectStatus() {
        return projectRepository.projectStatus();
    }

    public Optional<Project> findByID(Long id) {
        return projectRepository.findById(id);
    }
    public Optional<Project> findBySapNo(Long id) {
        return projectRepository.findProjectBySapNo(id);
    }

    public void deleteByID(Long id) {
        projectRepository.deleteById(id);
    }

    public void delete(Project project) {
        projectRepository.delete(project);
    }
}
