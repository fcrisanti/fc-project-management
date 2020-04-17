package pl.fc.app.dao;

import org.springframework.data.repository.CrudRepository;
import pl.fc.app.enities.UserAccount;

import java.util.List;

public interface IUserRepository extends CrudRepository<UserAccount, Long> {

    @Override
    List<UserAccount> findAll();
}
