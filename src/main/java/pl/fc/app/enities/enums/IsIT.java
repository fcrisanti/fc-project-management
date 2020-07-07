package pl.fc.app.enities.enums;

public enum IsIT {
    IT("IT"),
    NON_IT("Non IT");

    private final String displayValue;

    private IsIT(String displayValue) {
        this.displayValue = displayValue;
    }

    public static IsIT getByDisplayValue(String displayValue) {
        for (IsIT it : IsIT.values()) {
            if(it.displayValue.equals(displayValue)) {
                return it;
            }
        }
        return IsIT.NON_IT;
    }

    public String getDisplayValue() {
        return displayValue;
    }
}
