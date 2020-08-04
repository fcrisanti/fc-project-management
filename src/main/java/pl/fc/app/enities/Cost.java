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
import javax.persistence.SequenceGenerator;
import java.math.BigDecimal;
import java.time.LocalDate;

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
                .costCategory(CostCategory.getByDisplayValue(costDTO.costCategory))
                .grossAmount(!costDTO.grossAmount.isEmpty()? new BigDecimal(costDTO.grossAmount.replaceAll("\\s", "")) : BigDecimal.ZERO)
                .isIT(IsIT.getByDisplayValue(costDTO.isIT))
                .invoiceNumber(costDTO.invoiceNumber)
                .MPK(costDTO.MPK)
                .nazwaBiura(costDTO.nazwaBiura)
                .nrZlecenia(costDTO.nrZlecenia)
                .provider(costDTO.provider)
                .title(costDTO.title)
                .type(!costDTO.type.equals("0") ? CostType.valueOf(costDTO.type) : null)
                .PMCostCategory(costDTO.PMCostCategory)
                .build();

        if (!costDTO.invoiceDate.isEmpty()) {
            createdCost.setInvoiceDate(LocalDate.parse(costDTO.invoiceDate));
        }
        return createdCost;
    }
}
