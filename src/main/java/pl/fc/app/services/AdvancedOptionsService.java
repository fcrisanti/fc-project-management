package pl.fc.app.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.fc.app.dao.variables.ITooltipRepository;
import pl.fc.app.enities.variables.Tooltip;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Comparator;
import java.util.List;

@Service
public class AdvancedOptionsService {

    final List<String> PSR_FIELD_NAMES = new ArrayList<>(Arrays.asList("Project Description","Key Modified Systems","Project Budget","Realized Costs","Cost Allocation Key","Project Rating","Cost Forecast","Project Milestones","Project Risks","Comments", "Annual Budget"));

    @Autowired
    ITooltipRepository tooltipRepository;

    public void save(Tooltip tooltip) {
        tooltipRepository.save(tooltip);
    }

    public void saveAll(List<Tooltip> tooltips) {
        tooltipRepository.saveAll(tooltips);
    }

    public List<Tooltip> setAndGet() {
            for (String fieldName : PSR_FIELD_NAMES) {
                if(!tooltipRepository.findByFieldName(fieldName).isPresent())
                tooltipRepository.save(new Tooltip(fieldName));
            }
            return tooltipRepository.findAll();
        }

    public List<Tooltip> getAll() {
        return tooltipRepository.findAll();
    }

}
