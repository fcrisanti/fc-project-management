package pl.fc.app.enities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import org.springframework.format.annotation.DateTimeFormat;
import pl.fc.app.enities.enums.*;
import javax.persistence.SequenceGenerator;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Project {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE, generator = "project_generator")
    @SequenceGenerator(name = "project_generator",sequenceName = "project_seq", allocationSize = 1)
    private long projectId;

    private String name;
    private Long sapNo;
    private String projectManager;
    private String techManager;
    private String analyst;
    private String steeringCom;
    private Company company;
    private Genesis genesis;
    private Status status;
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
    private LocalDate projectClosure;
    private String descriptionPl;
    private String descriptionEn;
    private String stage;

    @ManyToMany(cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.PERSIST}, fetch = FetchType.LAZY)
    @JoinTable(name = "project_employee", joinColumns = @JoinColumn(name = "project_id"),
            inverseJoinColumns = @JoinColumn(name = "employee_id"))
    private List<Employee> employees;

    public void addEmployee(Employee employee) {
        if(employees==null) {
            employees = new ArrayList<>();
        }
        this.employees.add(employee);
    }

    public Project(String name, String stage, String description) {
        this.name = name;
        this.stage = stage;
        this.descriptionPl = description;
    }
}
