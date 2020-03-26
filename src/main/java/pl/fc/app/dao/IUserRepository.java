package pl.fc.app.dao;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import pl.fc.app.dto.IProjectStatus;
import pl.fc.app.enities.Project;
import pl.fc.app.enities.UserAccount;

import java.util.List;

public interface IUserRepository extends CrudRepository<UserAccount, Long> {

    @Override
    List<UserAccount> findAll();
}
