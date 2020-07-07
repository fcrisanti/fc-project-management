package pl.fc.app.enities;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "category name",
        "category budget",
        "delete"
})
public class PMCostCategoryDTO {

    @JsonProperty("category name")
    public String categoryName;
    @JsonProperty("category budget")
    public String categoryBudget;
    @JsonProperty("delete")
    public String delete;

}