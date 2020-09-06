package pl.fc.app.enities.variables;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Tooltip {
    public Tooltip(String name) {
        this.fieldName = name;
    }

    @Id
    private String fieldName;
    @Column(columnDefinition = "TEXT")
    private String fieldDescription;

    @Override
    public String toString() {
        return fieldDescription;
    }
}

