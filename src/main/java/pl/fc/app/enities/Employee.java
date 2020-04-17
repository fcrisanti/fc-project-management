package pl.fc.app.enities;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.SequenceGenerator;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "employee_generator")
    @SequenceGenerator(name = "employee_generator",sequenceName = "employee_seq", allocationSize = 1)
    private long employeeId;

    private String firstName;

    private String lastName;

//    @ManyToMany(cascade = {CascadeType.DETACH, CascadeType.MERGE, CascadeType.REFRESH, CascadeType.PERSIST}, fetch = FetchType.LAZY)
//    @JoinTable(name = "project_employee", joinColumns = @JoinColumn(name = "employee_id"),
//                inverseJoinColumns = @JoinColumn(name = "project_id"))
    @OneToMany(mappedBy = "employees")
    private List<Project> projects;

    public Employee(String firstName, String lastName, String email) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder();
        sb.append(firstName).append(' ');
        sb.append(lastName);
        return sb.toString();
    }
}
