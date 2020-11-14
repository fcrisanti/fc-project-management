package pl.fc.app.enities.variables;

import java.util.List;

public class TypesDTO {
    private List<Type> types;

    public TypesDTO() {
    }

    public TypesDTO(List<Type> types) {
        this.types = types;
    }

    public List<Type> getTypes() {
        return types;
    }

    public void setTypes(List<Type> types) {
        this.types = types;
    }

    public String getCompanyColor(String type) {
        return this.types.stream().filter(t -> t.getName().equals(type)).findFirst().orElse(new Type("any","#99ccff")).getColor();
    }
}
