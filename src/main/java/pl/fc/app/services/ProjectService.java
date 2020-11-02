package pl.fc.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;
import pl.fc.app.dao.IProjectRepository;
import pl.fc.app.dao.variables.ICompanyRepository;
import pl.fc.app.dto.IProjectStatus;
import pl.fc.app.enities.Project;
import pl.fc.app.enities.variables.Company;

import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.TreeMap;
import java.util.stream.Collectors;

@Service
public class ProjectService {

    @Autowired
    IProjectRepository projectRepository;

    @Autowired
    ICompanyRepository companyRepository;

    public void save(Project project) {
        projectRepository.save(project);
    }

    public void removeProjectBySapNo(Long sapNo) {
        projectRepository.removeProjectBySapNo(sapNo);
    }

    public List<Project> getAll() {
        return projectRepository.findAll();
    }

    public Map<Long, String> getIdWithNames() {
        Map<Long, String> allProjectIdsWithNames = new LinkedHashMap<>();
        List<Project> allProjects = getAll();
        for (Project project : allProjects) {
            allProjectIdsWithNames.put(project.getProjectId(), "P" + project.getSapNo() + " - " + project.getName());
        }
        return allProjectIdsWithNames;
    }

    public Map<String, Double> convertCompaniesToCostAllocation(List<String> companies, Map<String, Double> costAllocation) {
        if (costAllocation == null) {
            costAllocation = new TreeMap<>();
        }

        for (String company : companies) {
            costAllocation.putIfAbsent(company, 0.0);
        }

        List<String> companiesToDelete = new ArrayList<>(costAllocation.keySet());
        companiesToDelete.removeAll(companies);
        costAllocation.keySet().removeAll(companiesToDelete);

        return costAllocation;
    }

    public List<IProjectStatus> projectStatus() {
        return projectRepository.projectStatus();
    }

    public Optional<Project> findByID(Long id) {
        return projectRepository.findById(id);
    }

    public Project getByID(Long id) {
        Optional<Project> maybeProject = projectRepository.findById(id);
        return maybeProject.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Motyla noga! Nie znalazłem takiego projektu :("));
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

    public List<Project> getAllNonHavingPsrByQuarterAndYear(int quarter, Long year) {
        List<Project> nonPsr = projectRepository.findAllByPsrNotRequiredIsNullOrPsrNotRequiredIsFalse()
                .stream()
                .filter(project -> project.getProjectStatusReports().isEmpty()).collect(Collectors.toList());

        nonPsr.addAll(projectRepository.findAllByPsrNotRequiredIsNullOrPsrNotRequiredIsFalse()
                .stream()
                .filter(project -> !project.getProjectStatusReports().isEmpty())
                .filter(project -> project.getProjectStatusReports()
                        .stream()
                        .noneMatch(projectStatusReport -> projectStatusReport.getYear().equals(year) && projectStatusReport.getQuarter().getValue() == quarter))
                .collect(Collectors.toList()));
        return nonPsr;
    }

    public List<Project> getAllVIGNonHavingPsrByQuarterAndYear(int quarter, Long year) {
        List<String> VIGCompanyNames = companyRepository.getCompaniesByIsVIG(true).stream().map(Company::getCompany).collect(Collectors.toList());
        return getAllNonHavingPsrByQuarterAndYear(quarter, year)
                .stream()
                .filter(project -> project.getCompanies()
                        .stream()
                        .anyMatch(VIGCompanyNames::contains))
                .collect(Collectors.toList());
    }
}
