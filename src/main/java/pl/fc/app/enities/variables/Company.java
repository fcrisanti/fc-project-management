package pl.fc.app.enities.variables;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.fc.app.enities.Project;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.SequenceGenerator;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Company {
    public Company(String name) {
        this.company = name;
    }

    @Id
    private String company;

    @Override
    public String toString() {
        return company;
    }
}

