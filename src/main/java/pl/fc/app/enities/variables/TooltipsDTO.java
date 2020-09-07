package pl.fc.app.enities.variables;

import java.util.List;

public class TooltipsDTO {
    private List<Tooltip> tooltips;

    public TooltipsDTO() {
    }

    public TooltipsDTO(List<Tooltip> tooltips) {
        this.tooltips = tooltips;
    }

    public List<Tooltip> getTooltips() {
        return tooltips;
    }

    public void setTooltips(List<Tooltip> tooltips) {
        this.tooltips = tooltips;
    }

    public Tooltip getByFieldName(String fieldName) {
        return this.tooltips.stream().filter(t -> t.getFieldName().equals(fieldName)).findFirst().orElse(new Tooltip("Tooltip not defined. Define Tooltip in Advanced Options menu"));
    }
}
