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
import pl.fc.app.enities.enums.DocumentState;
import pl.fc.app.shared.Auditable;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.EntityListeners;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.MappedSuperclass;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import java.math.BigDecimal;
import java.math.BigInteger;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
@EntityListeners(AuditingEntityListener.class)
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "project_generator")
    @SequenceGenerator(name = "project_generator", sequenceName = "project_seq", allocationSize = 1)
    private long projectId;
    private String name;
    private Long sapNo;
    private Long priority;
    private Long appraisal;
    private String projectManager;
    private String techManager;
    private String analyst;
    private String steeringCom;
    private String steeringComMeetings;
    private String projectSponsor;
    private String costAllocationKey;
    @ElementCollection(fetch = FetchType.LAZY)
    private List<String> companies;
    private String genesis;
    private String status;
    private String externalProviders;
    private String MPK;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate inaugurationDate;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate kickOff;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate goLivePlanned;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate goLiveFinal;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate depreciationStartDate;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate projectClosure;
    @Column(columnDefinition = "TEXT")
    private String descriptionPl;
    @Column(columnDefinition = "TEXT")
    private String descriptionEn;
    @Column(columnDefinition = "TEXT")
    private String comment;
    private BigInteger budget;
    private Boolean psrNotRequired;

    private DocumentState kickOffPresentation;
    private DocumentState businessCase;
    private DocumentState projectMandate;
    private DocumentState schedule;
    private DocumentState DPIA;
    private DocumentState closurePresentation;

    @Column(columnDefinition = "json")
    @JsonRawValue
    private String jsonGantt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_employee")
    private Employee employees;

    @OneToMany(mappedBy = "project", cascade= CascadeType.REMOVE)
    private Set<ProjectStatusReport> projectStatusReports;

    public void addEmployee(Employee employee) {
        employees = employee;
    }

    public void addPSR(ProjectStatusReport projectStatusReport) {
        projectStatusReports.add(projectStatusReport);
    }

    @Override
    public String toString() {
        return "P" + sapNo + " " + name;
    }

    @Column(name = "created_date")
    @CreatedDate
    private Date createdDate;

    @Column(name = "last_modified_date")
    @LastModifiedDate
    private Date lastModifiedDate;

    @Column(name = "modified_by")
    @LastModifiedBy
    private String modifiedBy;
}
