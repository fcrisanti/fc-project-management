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
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Set;
import java.util.stream.Collectors;

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
    private BigDecimal budget;
    private Boolean psrNotRequired;

    private DocumentState kickOffPresentation;
    private DocumentState businessCase;
    private DocumentState projectMandate;
    private DocumentState schedule;
    private DocumentState DPIA;
    private DocumentState closurePresentation;

    @ElementCollection
    private Map<String, BigDecimal> PMCostCategory;

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

    public Map<String, BigDecimal[]> getCategoryBudgetExpensesRemainingAndUpdateBudget() {
        BigDecimal sumBudget = BigDecimal.ZERO;
        BigDecimal sumExpenses = BigDecimal.ZERO;

        Map<String, BigDecimal[]> result = new HashMap<>();
        if(PMCostCategory!=null) {
            for (Map.Entry<String, BigDecimal> entry : PMCostCategory.entrySet()) {
                BigDecimal[] budgetExpensesRemaining = new BigDecimal[3];
                budgetExpensesRemaining[0] = entry.getValue();
                sumBudget = sumBudget.add(budgetExpensesRemaining[0]);
                budgetExpensesRemaining[1] = expenses.stream().filter(e -> e.getPMCostCategory().equals(entry.getKey())).map(Cost::getGrossAmount).reduce(BigDecimal::add).orElse(BigDecimal.ZERO);
                sumExpenses = sumExpenses.add(budgetExpensesRemaining[1]);
                budgetExpensesRemaining[2] = budgetExpensesRemaining[0].subtract(budgetExpensesRemaining[1]);
                result.put(entry.getKey(), budgetExpensesRemaining);
            }
            if (!(sumBudget.compareTo(BigDecimal.ZERO) == 0)) {
                this.setBudget(sumBudget);
            }
            result.put("total", new BigDecimal[]{sumBudget, sumExpenses, sumBudget.subtract(sumExpenses)});
        } else return null;
        return result;
    }

    public Map<Integer, BigDecimal> getExpensesByYear() {
        BigDecimal sumExpenses = BigDecimal.ZERO;
        Map<Integer, BigDecimal> result = new HashMap<>();
        if(expenses!=null) {
            Set<Integer> years = expenses.stream().filter(c -> c.getInvoiceDate()!=null).map(Cost::getInvoiceDate).filter(Objects::nonNull).map(LocalDate::getYear).collect(Collectors.toSet());

            for (Integer year : years) {
                BigDecimal budgetExpensesRemaining = expenses.stream().filter(e -> e.getInvoiceDate() != null).filter(e -> e.getInvoiceDate().getYear() == (year)).map(Cost::getGrossAmount).filter(Objects::nonNull).reduce(BigDecimal::add).orElse(BigDecimal.ZERO);
                sumExpenses = sumExpenses.add(budgetExpensesRemaining);
                result.put(year, budgetExpensesRemaining);
            }
            result.put(0, sumExpenses);
        } else return null;
        return result;
    }

    public Map<String, BigDecimal> getExpensesByCompany() {
        BigDecimal sumExpenses = BigDecimal.ZERO;
        Map<String, BigDecimal> result = new HashMap<>();
        if(expenses!=null) {
            Set<String> companies = expenses.stream().filter(Objects::nonNull).filter(c -> c.getCompanies() != null).map(Cost::getCompanies).collect(Collectors.toSet());

            for (String company : companies) {
                BigDecimal budgetExpensesRemaining = expenses.stream().filter(e -> e.getCompanies().equals(company)).map(Cost::getGrossAmount).reduce(BigDecimal::add).orElse(BigDecimal.ZERO);
                sumExpenses = sumExpenses.add(budgetExpensesRemaining);
                result.put(company, budgetExpensesRemaining);
            }
            result.put("total", sumExpenses);
        } else return null;
        return result;
    }

    @Override
    public String toString() {
        return "P" + sapNo + " " + name;
    }
}
