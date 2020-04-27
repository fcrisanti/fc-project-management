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
public class Status {
    public Status(String name) {
        this.name = name;
    }

    @Id
    private String name;

    @Override
    public String toString() {
        return name;
    }
}

