package pl.fc.app.enities.variables;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;

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

