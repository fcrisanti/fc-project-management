package pl.fc.app.enities;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.Builder;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "data",
        "companies",
        "amount",
        "invoice",
        "provider",
        "title",
        "it?",
        "category",
        "type",
        "mpk",
        "biuro",
        "nr zlecenia",
        "pm category"
})
@Builder
public class CostDTO {

    @JsonProperty("data")
    public String invoiceDate;
    @JsonProperty("companies")
    public String companies;
    @JsonProperty("amount")
    public String grossAmount;
    @JsonProperty("invoice")
    public String invoiceNumber;
    @JsonProperty("provider")
    public String provider;
    @JsonProperty("title")
    public String title;
    @JsonProperty("it?")
    public String isIT;
    @JsonProperty("category")
    public String costCategory;
    @JsonProperty("type")
    public String type;
    @JsonProperty("mpk")
    public String MPK;
    @JsonProperty("biuro")
    public String nazwaBiura;
    @JsonProperty("nr zlecenia")
    public String nrZlecenia;
    @JsonProperty("pm category")
    public String PMCostCategory;
    public Boolean exists;

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("CostDTO{");
        sb.append("data='").append(invoiceDate).append('\'');
        sb.append(", companies='").append(companies).append('\'');
        sb.append(", amount='").append(grossAmount).append('\'');
        sb.append(", invoice='").append(invoiceNumber).append('\'');
        sb.append(", provider='").append(provider).append('\'');
        sb.append(", title='").append(title).append('\'');
        sb.append(", it='").append(isIT).append('\'');
        sb.append(", category='").append(costCategory).append('\'');
        sb.append(", type='").append(type).append('\'');
        sb.append(", mpk='").append(MPK).append('\'');
        sb.append(", biuro='").append(nazwaBiura).append('\'');
        sb.append(", nrZlecenia='").append(nrZlecenia).append('\'');
        sb.append('}');
        return sb.toString();
    }
}