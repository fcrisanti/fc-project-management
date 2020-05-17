package pl.fc.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import pl.fc.app.dto.IProjectStatus;
import pl.fc.app.enities.Project;

import java.util.List;
import java.util.Optional;

public interface IProjectRepository extends CrudRepository<Project, Long> {

    @Override
    List<Project> findAll();
    @Query(nativeQuery = true, value="" +
            "SELECT status AS label, COUNT(*) AS value FROM project GROUP BY stage ORDER BY 2 DESC")

    public List<IProjectStatus> projectStatus();

    void removeProjectBySapNo(long sapNo);

    Optional<Project> findProjectBySapNo(long sapNp);

    List<Project> findAllByPsrNotRequiredIsNullOrPsrNotRequiredIsFalse();
}
