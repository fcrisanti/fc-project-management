package pl.fc.app.dao;

import org.springframework.data.repository.CrudRepository;
import pl.fc.app.enities.Cost;
import pl.fc.app.enities.Project;
import pl.fc.app.enities.variables.CostCategory;

import java.util.List;

public interface ICostCatRepository extends CrudRepository<CostCategory, Long> {

    @Override
    List<CostCategory> findAll();

    CostCategory getCostCategoryByDisplayValue(String displayValue);

}
