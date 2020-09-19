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
    public Company(String name, String color) {
        this.company = name;
        this.color = color;
    }

    @Id
    private String company;

    private String color;

    @Override
    public String toString() {
        return company;
    }
}

