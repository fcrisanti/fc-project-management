package pl.fc.app.enities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.format.annotation.DateTimeFormat;
import pl.fc.app.enities.variables.CostCategory;
import pl.fc.app.enities.enums.CostType;
import pl.fc.app.enities.enums.IsIT;

import javax.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@EntityListeners(AuditingEntityListener.class)
public class Cost {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "cost_generator")
    @SequenceGenerator(name = "cost_generator", sequenceName = "cost_seq", allocationSize = 1)
    private long costId;
    private BigDecimal grossAmount;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate invoiceDate;
    private String title;
    private String provider;
    private String MPK;
    private String invoiceNumber;
    private String description;
//    @ElementCollection(fetch = FetchType.LAZY)
    private String companies;
    @Enumerated(EnumType.STRING)
    private CostType type;
    @Enumerated(EnumType.STRING)
    private IsIT isIT;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "`fk_costcat`")
    private CostCategory costCategory;

    private String projectString;
    private String nrZlecenia;
    private String nazwaBiura;

    private String PMCostCategory;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_cost")
    private Project project;

}
