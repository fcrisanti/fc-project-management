package pl.fc.app.enities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.List;

@Entity
@NoArgsConstructor
@Getter
@Setter
@Table(name = "user_accounts")
public class UserAccount {

    @Id
    @Column(name = "user_id")
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "user_accounts_seq")
    private long userId;

    @Column(name = "username")
    private String userName;

    private String name;
    private String surname;

    private String email;

    private String password;

    private String role = "ROLE_USER";

    private boolean enabled = true;

    @ElementCollection
    private List<String> areas;
}
