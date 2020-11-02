package pl.fc.app.dao.variables;

import org.springframework.data.repository.CrudRepository;
import pl.fc.app.enities.variables.Company;

import java.util.List;

public interface ICompanyRepository extends CrudRepository<Company, String> {

    @Override
    List<Company> findAll();

    void deleteCompanyByCompany(String name);

    Company getByCompany(String name);

    List<Company> getCompaniesByIsVIG(Boolean isVIG);

}
