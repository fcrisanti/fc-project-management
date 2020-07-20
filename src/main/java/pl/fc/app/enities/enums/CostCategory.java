package pl.fc.app.enities.enums;

public enum CostCategory {
    OTHER("Inne"),
    MAINTENANCE("Maitenance"),
    PERSONAL("Osobowe"),
    PERSONAL_EXTERNAL("Osobowe-zewnętrzne"),
    SOFTWARE("Software"),
    MARKETING("Marketing");

    private final String displayValue;

    private CostCategory(String displayValue) {
        this.displayValue = displayValue;
    }

    public static CostCategory getByDisplayValue(String displayValue) {
        for (CostCategory costCategory : CostCategory.values()) {
            if(costCategory.displayValue.equals(displayValue)) {
                return costCategory;
            }
        }
        return CostCategory.OTHER;
    }

    public String getDisplayValue() {
        return displayValue;
    }

    }
