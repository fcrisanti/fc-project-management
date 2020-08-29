package pl.fc.app.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import pl.fc.app.dao.IUserRepository;
import pl.fc.app.enities.UserAccount;

@Service
public class PermissionManager {

    @Autowired
    IUserRepository userRepository;

    public static String getUserName() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentUserName = authentication.getName();
            return currentUserName;
        }
        return "";
    }

    public boolean userAllowed(String area) {
        if(userRepository.count()<=2) {
            return true;
        }
        if (userRepository.findByUserName(getUserName()).isPresent()) {
            return (userRepository.findByUserName(getUserName()).get().getAreas().contains(area));
        } else return false;
    }
}
