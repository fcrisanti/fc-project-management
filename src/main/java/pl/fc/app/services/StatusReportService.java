package pl.fc.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.threeten.extra.Quarter;
import pl.fc.app.dao.IStatusReportRepository;
import pl.fc.app.dao.variables.ICompanyRepository;
import pl.fc.app.enities.ProjectStatusReport;
import pl.fc.app.enities.variables.Company;

import javax.transaction.Transactional;
import java.time.Month;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class StatusReportService {

    @Autowired
    IStatusReportRepository statusRepository;

    @Autowired
    ICompanyRepository companyRepository;

    public void save(ProjectStatusReport statusReport) {
        statusRepository.save(statusReport);
    }

    public Optional<ProjectStatusReport> findByProjectIdMonthYear(Long projectId, int month, Long year) {
       return statusRepository.findByMonthAndYearAndProjectProjectId(Month.of(month),year,projectId);
    }

    public Optional<ProjectStatusReport> findByProjectIdQuarterYear(Long projectId, int quarter, Long year) {
        return statusRepository.findByQuarterAndYearAndProjectProjectId(Quarter.of(quarter),year,projectId);
    }

    public ProjectStatusReport getByProjectIdMonthYear(Long projectId, int month, Long year) {
        return statusRepository.getByMonthAndYearAndProjectProjectId(Month.of(month),year,projectId);
    }

    public List<ProjectStatusReport> getAllByMonthAndYear(int month, long year) {
        return statusRepository.getByMonthAndYear(Month.of(month),year);
    }

    public List<ProjectStatusReport> getAllByQuarterAndYear(int quarter, long year) {
        return statusRepository.getByQuarterAndYear(Quarter.of(quarter),year);
    }

    public List<ProjectStatusReport> getAllByQuarterAndVIGCompany(int quarter, long year) {
        List<String> VIGCompanyNames = companyRepository.getCompaniesByIsVIG(true).stream().map(Company::getCompany).collect(Collectors.toList());
        return statusRepository.getByQuarterAndYear(Quarter.of(quarter),year)
                .stream()
                .filter(projectStatusReport -> projectStatusReport
                        .getProject()
                        .getCompanies()
                        .stream()
                        .anyMatch(VIGCompanyNames::contains))
                .collect(Collectors.toList());
    }

    @Transactional
    public void deleteByProjectSapNoQuarterYear(Long sapNo, int quarter, Long year) {
        statusRepository.deleteByQuarterAndYearAndProjectSapNo(Quarter.of(quarter),year,sapNo);
    }

    public Optional<ProjectStatusReport> findByPsrId(Long id) {
       return statusRepository.findByPsrId(id);
    }
}
