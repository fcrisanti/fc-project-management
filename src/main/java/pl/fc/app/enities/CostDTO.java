package pl.fc.app.enities;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

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
public class CostDTO {

    @JsonProperty("data")
    public String data;
    @JsonProperty("companies")
    public String companies;
    @JsonProperty("amount")
    public String amount;
    @JsonProperty("invoice")
    public String invoice;
    @JsonProperty("provider")
    public String provider;
    @JsonProperty("title")
    public String title;
    @JsonProperty("it?")
    public String it;
    @JsonProperty("category")
    public String category;
    @JsonProperty("type")
    public String type;
    @JsonProperty("mpk")
    public String mpk;
    @JsonProperty("biuro")
    public String biuro;
    @JsonProperty("nr zlecenia")
    public String nrZlecenia;
    @JsonProperty("pm category")
    public String pmCategory;

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("CostDTO{");
        sb.append("data='").append(data).append('\'');
        sb.append(", companies='").append(companies).append('\'');
        sb.append(", amount='").append(amount).append('\'');
        sb.append(", invoice='").append(invoice).append('\'');
        sb.append(", provider='").append(provider).append('\'');
        sb.append(", title='").append(title).append('\'');
        sb.append(", it='").append(it).append('\'');
        sb.append(", category='").append(category).append('\'');
        sb.append(", type='").append(type).append('\'');
        sb.append(", mpk='").append(mpk).append('\'');
        sb.append(", biuro='").append(biuro).append('\'');
        sb.append(", nrZlecenia='").append(nrZlecenia).append('\'');
        sb.append('}');
        return sb.toString();
    }
}