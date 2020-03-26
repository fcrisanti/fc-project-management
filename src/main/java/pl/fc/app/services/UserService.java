package pl.fc.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.fc.app.dao.IUserRepository;
import pl.fc.app.enities.UserAccount;

@Service
public class UserService {

    @Autowired
    IUserRepository userRepository;

    public void save(UserAccount userAccount) {
        userRepository.save(userAccount);
    }
}
