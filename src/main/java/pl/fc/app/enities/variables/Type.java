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
public class Type {
    public Type(String name) {
        this.name = name;
    }

    public Type(String name, String color) {
        this.name = name;
        this.color = color;
    }

    @Id
    private String name;

    private String color;

    @Override
    public String toString() {
        return name;
    }
}

