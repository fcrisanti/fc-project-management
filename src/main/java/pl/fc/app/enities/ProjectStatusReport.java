package pl.fc.app.enities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;
import pl.fc.app.enities.enums.ProjectState;

import javax.persistence.Entity;
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
import java.time.Month;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class ProjectStatusReport {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "psr_generator")
    @SequenceGenerator(name = "psr_generator", sequenceName = "psr_seq", allocationSize = 1)
    private long psrId;

    private Month month;
    private Long year;
    private BigDecimal realizedBudget;
    private BigDecimal plannedBudget;
    private BigDecimal forecastBudget;

    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate projectInauguration;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate projectGoLive;

    @Enumerated(EnumType.STRING)
    private ProjectState scope;
    @Enumerated(EnumType.STRING)
    private ProjectState schedule;
    @Enumerated(EnumType.STRING)
    private ProjectState cost;

    private String projectManager;
    private String completedWorks;
    private String nextSteps;
    private String risks;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_psr")
    private Project project;

    public void setProject(Project project) {
        this.project = project;
    }
}
