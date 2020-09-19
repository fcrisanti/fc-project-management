package pl.fc.app.enities.variables;

import java.util.List;

public class CompanysDTO {
    private List<Company> companies;

    public CompanysDTO() {
    }

    public CompanysDTO(List<Company> companies) {
        this.companies = companies;
    }

    public List<Company> getCompanies() {
        return companies;
    }

    public void setCompanies(List<Company> companies) {
        this.companies = companies;
    }

    public String getCompanyColor(String company) {
        return this.companies.stream().filter(t -> t.getCompany().equals(company)).findFirst().orElse(new Company("any","#99ccff")).getColor();
    }
}
