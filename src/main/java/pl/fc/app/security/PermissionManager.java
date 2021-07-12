package pl.fc.app.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import pl.fc.app.dao.IUserRepository;
import pl.fc.app.services.ProjectService;

@Service
public class PermissionManager {

    @Autowired
    IUserRepository userRepository;

    @Autowired
    ProjectService projectService;

    public static String getUserName() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (!(authentication instanceof AnonymousAuthenticationToken)) {
            String currentUserName = authentication.getName();
            return currentUserName;
        }
        return "";
    }

    public static Boolean isCompensaUser() {
       Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
       return authentication.getPrincipal().toString().contains("vpn_compensa_users");
    }

    public boolean userExists() {
        return userRepository.findByUserName(getUserName()).isPresent();
    }

    public boolean userAllowed(String area) {
        if (userRepository.count() <= 2) {
            return true;
        }
        if (userRepository.findByUserName(getUserName()).isPresent()) {
            return (userRepository.findByUserName(getUserName()).get().getAreas().contains(area));
        } else return false;
    }

    public boolean userAllowed(long projectId) {
        if (projectService.getByID(projectId).getPmAlias() != null) {
            return projectService.getByID(projectId).getPmAlias().equals(getUserName());
        } else return false;
    }
}
