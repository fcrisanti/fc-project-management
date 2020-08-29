package pl.fc.app.dao;

import org.springframework.data.repository.CrudRepository;
import pl.fc.app.enities.UserAccount;

import java.util.List;
import java.util.Optional;

public interface IUserRepository extends CrudRepository<UserAccount, Long> {

    @Override
    List<UserAccount> findAll();

    Optional<UserAccount> findByUserName(String userName);
}
