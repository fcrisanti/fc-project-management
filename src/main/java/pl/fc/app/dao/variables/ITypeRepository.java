package pl.fc.app.dao.variables;

import org.springframework.data.repository.CrudRepository;
import pl.fc.app.enities.variables.Status;
import pl.fc.app.enities.variables.Type;

import java.util.List;

public interface ITypeRepository extends CrudRepository<Type, String> {

    @Override
    List<Type> findAll();

    void deleteStatusByName(String name);

}
