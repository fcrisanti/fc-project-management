package pl.fc.app.dao;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import pl.fc.app.enities.UserAccount;

import static org.junit.Assert.assertEquals;

@SpringBootTest
@RunWith(SpringRunner.class)
public class UserRepositoryIntegrationTest {

    @Autowired
    IUserRepository userRepository;

    @Test
    public void ifNewUserSaved_thenSuccess() {
        UserAccount userAccount = new UserAccount();
        userRepository.save(userAccount);

        assertEquals(1, userRepository.findAll().size());
    }
}
