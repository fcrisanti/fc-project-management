package pl.fc.app.enities;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.format.annotation.DateTimeFormat;
import pl.fc.app.enities.enums.CostCategory;
import pl.fc.app.enities.enums.CostType;
import pl.fc.app.enities.enums.IsIT;

import javax.persistence.CascadeType;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import java.math.BigInteger;
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
    private BigInteger grossAmount;
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
    @Enumerated(EnumType.STRING)
    private CostCategory costCategory;
    private String projectString;
    private String nrZlecenia;
    private String nazwaBiura;

    private String PMCostCategory;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_cost")
    private Project project;

    public static Cost create(CostDTO costDTO) {
        Cost createdCost = Cost.builder()
                .companies(costDTO.companies)
                .costCategory(CostCategory.getByDisplayValue(costDTO.category))
                .grossAmount(new BigInteger(costDTO.amount))
                .isIT(IsIT.getByDisplayValue(costDTO.it))
                .invoiceNumber(costDTO.invoice)
                .MPK(costDTO.mpk)
                .nazwaBiura(costDTO.biuro)
                .nrZlecenia(costDTO.nrZlecenia)
                .provider(costDTO.provider)
                .title(costDTO.title)
                .type(CostType.valueOf(costDTO.type))
                .PMCostCategory(costDTO.pmCategory)
                .build();

        if (!costDTO.data.isEmpty()) {
            createdCost.setInvoiceDate(LocalDate.parse(costDTO.data));
        }
        return createdCost;
    }
}
