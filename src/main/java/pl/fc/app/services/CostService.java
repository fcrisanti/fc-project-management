package pl.fc.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.fc.app.dao.ICostCatRepository;
import pl.fc.app.dao.ICostRepository;
import pl.fc.app.enities.Cost;
import pl.fc.app.enities.CostDTO;
import pl.fc.app.enities.Project;
import pl.fc.app.enities.enums.CostType;
import pl.fc.app.enities.enums.IsIT;
import pl.fc.app.enities.variables.CostCategory;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

@Service
public class CostService {

    @Autowired
    ICostRepository costRepository;

    @Autowired
    ICostCatRepository costCatRepository;

    public void save(Cost cost) {
        costRepository.save(cost);
    }

    public void saveCostCat(CostCategory cost) {
        costCatRepository.save(cost);
    }

    public CostCategory getCostCategoryByDisplayValue(String displayValue) {
       return costCatRepository.getCostCategoryByDisplayValue(displayValue);
    }

    public void deleteCostCategoryByDisplayValue(String displayValue) {
        CostCategory costCategoryToDelete = costCatRepository.getCostCategoryByDisplayValue(displayValue);
        costCatRepository.delete(costCategoryToDelete);
    }

    public void deleteCostCat(CostCategory cost) {
        costCatRepository.delete(cost);
    }

    public void deleteAllByProject(Project project) {
        costRepository.deleteAllByProject(project);
    }

    public List<Cost> getAll() {
        return costRepository.findAll();
    }

    public List<CostCategory> getAllCategories() {
        return costCatRepository.findAll();
    }

    public Cost create(CostDTO costDTO) {
        Cost createdCost = Cost.builder()
                .companies(costDTO.companies)
                .costCategory(costCatRepository.getCostCategoryByDisplayValue(costDTO.costCategory))
                .grossAmount(!costDTO.grossAmount.isEmpty() ? new BigDecimal(costDTO.grossAmount.replaceAll("\\s", "")) : BigDecimal.ZERO)
                .isIT(IsIT.getByDisplayValue(costDTO.isIT))
                .invoiceNumber(costDTO.invoiceNumber)
                .MPK(costDTO.MPK)
                .nazwaBiura(costDTO.nazwaBiura)
                .nrZlecenia(costDTO.nrZlecenia)
                .provider(costDTO.provider)
                .title(costDTO.title)
                .type(!costDTO.type.equals("0") ? CostType.valueOf(costDTO.type) : null)
                .PMCostCategory(costDTO.PMCostCategory)
                .build();

        if (!costDTO.invoiceDate.isEmpty()) {
            createdCost.setInvoiceDate(LocalDate.parse(costDTO.invoiceDate));
        }
        return createdCost;
    }

}
