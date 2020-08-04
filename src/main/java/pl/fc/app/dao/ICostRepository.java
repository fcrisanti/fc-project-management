package pl.fc.app.dao;

import org.springframework.data.repository.CrudRepository;
import pl.fc.app.enities.Cost;
import pl.fc.app.enities.Project;

import java.util.List;

public interface ICostRepository extends CrudRepository<Cost, Long> {

    @Override
    List<Cost> findAll();

    void deleteAllByProject(Project project);

}
