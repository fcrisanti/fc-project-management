package pl.fc.app.enities;

import com.fasterxml.jackson.annotation.JsonRawValue;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;
import pl.fc.app.enities.enums.DocumentState;
import javax.persistence.Column;
import javax.persistence.ElementCollection;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "project_generator")
    @SequenceGenerator(name = "project_generator", sequenceName = "project_seq", allocationSize = 1)
    private long projectId;
    private String name;
    private Long sapNo;
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
    private BigDecimal budget;
    private Boolean psrNotRequired;

    private DocumentState kickOffPresentation;
    private DocumentState businessCase;
    private DocumentState projectMandate;
    private DocumentState schedule;
    private DocumentState closurePresentation;

    @Column(columnDefinition = "json")
    @JsonRawValue
    private String jsonGantt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_employee")
    private Employee employees;

    @OneToMany(mappedBy = "project")
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
}
