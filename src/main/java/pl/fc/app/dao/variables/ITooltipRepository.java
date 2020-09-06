package pl.fc.app.dao.variables;

import org.springframework.data.repository.CrudRepository;
import pl.fc.app.enities.variables.Tooltip;

import java.util.List;
import java.util.Optional;

public interface ITooltipRepository extends CrudRepository<Tooltip, String> {

    @Override
    List<Tooltip> findAll();

    void deleteTooltipsByFieldName(String name);

    Optional<Tooltip> findByFieldName(String fieldName);
}
