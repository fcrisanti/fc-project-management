package pl.fc.app.enities;

import com.fasterxml.jackson.annotation.JsonRawValue;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import org.springframework.format.annotation.DateTimeFormat;
import org.threeten.extra.Quarter;
import pl.fc.app.enities.enums.ProjectState;

import javax.persistence.Column;
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
import java.time.Month;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class ProjectStatusReport {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "psr_generator")
    @SequenceGenerator(name = "psr_generator", sequenceName = "psr_seq", allocationSize = 1)
    private long psrId;

    private Month month;
    private Quarter quarter;
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

    @Column(columnDefinition = "json")
    @JsonRawValue
    private String jsonMilestones;

    @Column(columnDefinition = "TEXT")
    private String htmlMilestones;

    @Column(columnDefinition = "json")
    @JsonRawValue
    private String jsonRisks;

    @Column(columnDefinition = "TEXT")
    private String htmlRisks;

    private String projectManager;
    private String completedWorks1; //obsolete, for backward-compatibility only
    private String completedWorks2; //obsolete, for backward-compatibility only
    private String nextSteps1; //obsolete, for backward-compatibility only
    private String nextSteps2; //obsolete, for backward-compatibility only
    private String risks1; //obsolete, for backward-compatibility only
    private String risks2; //obsolete, for backward-compatibility only
    @Column(columnDefinition = "TEXT")
    private String description;
    private String techManager;
    private String analyst;
    private String employees;
    private String modifiedSystems;
    private String costAllocationKey;
    private String comment;

    @Column(name = "created_date")
    @CreatedDate
    private Date createdDate;

    @Column(name = "last_modified_date")
    @LastModifiedDate
    private Date lastModifiedDate;

    @Column(name = "modified_by")
    @LastModifiedBy
    private String modifiedBy;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_psr")
    private Project project;

    public void setProject(Project project) {
        this.project = project;
    }
}
