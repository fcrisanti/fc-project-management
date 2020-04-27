package pl.fc.app.dao.variables;

import org.springframework.data.repository.CrudRepository;
import pl.fc.app.enities.variables.Status;

import java.util.List;

public interface IStatusRepository extends CrudRepository<Status, String> {

    @Override
    List<Status> findAll();

    void deleteStatusByName(String name);

}
