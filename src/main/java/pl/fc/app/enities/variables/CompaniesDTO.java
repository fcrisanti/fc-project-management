package pl.fc.app.enities.variables;

import java.util.List;

public class CompaniesDTO {
    private List<Company> companies;

    public CompaniesDTO() {
    }

    public CompaniesDTO(List<Company> companies) {
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
