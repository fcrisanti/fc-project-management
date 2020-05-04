package pl.fc.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.fc.app.dao.IStatusReportRepository;
import pl.fc.app.enities.ProjectStatusReport;

import java.time.Month;
import java.util.Optional;

@Service
public class StatusReportService {

    @Autowired
    IStatusReportRepository statusRepository;

    public void save(ProjectStatusReport statusReport) {
        statusRepository.save(statusReport);
    }

    public Optional<ProjectStatusReport> findByProjectIdMonthYear(Long projectId, int month, Long year) {
       return statusRepository.findByMonthAndYearAndProjectProjectId(Month.of(month),year,projectId);
    }

    public ProjectStatusReport getByProjectIdMonthYear(Long projectId, int month, Long year) {
        return statusRepository.getByMonthAndYearAndProjectProjectId(Month.of(month),year,projectId);
    }

    public Optional<ProjectStatusReport> findByPsrId(Long id) {
       return statusRepository.findByPsrId(id);
    }
}
