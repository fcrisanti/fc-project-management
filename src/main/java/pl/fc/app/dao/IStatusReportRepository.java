package pl.fc.app.dao;

import org.springframework.data.repository.CrudRepository;
import pl.fc.app.enities.ProjectStatusReport;

import java.time.Month;
import java.util.List;
import java.util.Optional;

public interface IStatusReportRepository extends CrudRepository<ProjectStatusReport, Long> {

    @Override
    List<ProjectStatusReport> findAll();

    Optional<ProjectStatusReport> findByMonthAndYearAndProjectProjectId(Month month, Long year, Long projectId);
    ProjectStatusReport getByMonthAndYearAndProjectProjectId(Month month, Long year, Long projectId);
    List<ProjectStatusReport> getByMonthAndYear(Month month, Long year);
    void deleteByMonthAndYearAndProjectProjectId(Month month, Long year, Long projectId);

    Optional<ProjectStatusReport> findByPsrId(Long psrId);
}
