package pl.fc.app.dao.variables;

import org.springframework.data.repository.CrudRepository;
import pl.fc.app.enities.variables.Genesis;

import java.util.List;

public interface IGenesisRepository extends CrudRepository<Genesis, String> {

    @Override
    List<Genesis> findAll();

    void deleteGenesisByName(String name);

}
