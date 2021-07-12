package pl.fc.app.enities.variables;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import pl.fc.app.enities.Cost;

import javax.persistence.*;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class CostCategory {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "costcat_generator")
    @SequenceGenerator(name = "costcat_generator", sequenceName = "costcat_seq", allocationSize = 1)
    private long costcatId;

    @OneToMany(mappedBy = "costCategory", cascade = CascadeType.REMOVE)
    private Set<Cost> cost;

    private String displayValue;

    private CostCategory(String displayValue) {
        this.displayValue = displayValue;
    }

    public String getDisplayValue() {
        return displayValue;
    }

}
