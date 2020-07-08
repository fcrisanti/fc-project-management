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
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import java.math.BigInteger;
import java.time.LocalDate;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
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

    @ElementCollection
    private Map<String, BigInteger> PMCostCategory;

    @Column(columnDefinition = "json")
    @JsonRawValue
    private String jsonGantt;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "fk_employee")
    private Employee employees;

    @OneToMany(mappedBy = "project", cascade = CascadeType.REMOVE)
    private Set<ProjectStatusReport> projectStatusReports;

    @OneToMany(mappedBy = "project", cascade = CascadeType.REMOVE)
    private Set<Cost> expenses;
    @Column(name = "created_date")
    @CreatedDate
    private Date createdDate;
    @Column(name = "last_modified_date")
    @LastModifiedDate
    private Date lastModifiedDate;
    @Column(name = "modified_by")
    @LastModifiedBy
    private String modifiedBy;

    public void addCost(Cost cost) {
        expenses.add(cost);
    }

    public void addEmployee(Employee employee) {
        employees = employee;
    }

    public void addPSR(ProjectStatusReport projectStatusReport) {
        projectStatusReports.add(projectStatusReport);
    }

    public Map<String, BigInteger[]> getCategoryBudgetExpensesRemaining() {
        BigInteger sumBudget = BigInteger.ZERO;
        BigInteger sumExpenses = BigInteger.ZERO;

        Map<String, BigInteger[]> result = new HashMap<>();
        for (Map.Entry<String, BigInteger> entry : PMCostCategory.entrySet()) {
            BigInteger[]  budgetExpensesRemaining = new BigInteger[3];
            budgetExpensesRemaining[0] = entry.getValue();
            sumBudget = sumBudget.add(budgetExpensesRemaining[0]);
            budgetExpensesRemaining[1] = expenses.stream().filter(e -> e.getPMCostCategory().equals(entry.getKey())).map(Cost::getGrossAmount).reduce(BigInteger::add).orElse(BigInteger.ZERO);
            sumExpenses = sumExpenses.add(budgetExpensesRemaining[1]);
            budgetExpensesRemaining[2] = budgetExpensesRemaining[0].subtract(budgetExpensesRemaining[1]);
            result.put(entry.getKey(),budgetExpensesRemaining);
        }
        result.put("total", new BigInteger[]{sumBudget,sumExpenses,sumBudget.subtract(sumExpenses)});
        return result;
    }

    @Override
    public String toString() {
        return "P" + sapNo + " " + name;
    }
}
