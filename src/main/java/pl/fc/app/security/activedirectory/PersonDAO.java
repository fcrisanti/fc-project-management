package pl.fc.app.security.activedirectory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ldap.core.ContextSource;
import org.springframework.ldap.core.LdapTemplate;
import org.springframework.ldap.filter.AndFilter;
import org.springframework.ldap.filter.EqualsFilter;
import org.springframework.security.ldap.SpringSecurityLdapTemplate;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by Tugrul on 11.02.2014.
 */
@Component
public class PersonDAO {


    private SpringSecurityLdapTemplate ldapTemplate;

    public void setLdapTemplate(SpringSecurityLdapTemplate ldapTemplate) {
        this.ldapTemplate = ldapTemplate;
    }

    protected final static String baseDN = "OU=Domain Controllers";


    public List<Person> getAllPersons() {

        List<Person> persons = new ArrayList<Person>();
        try {
            ldapTemplate.afterPropertiesSet();
            List search = ldapTemplate.search("", "(objectClass=person)", new PersonAttributesMapper());
            persons.addAll(search);
        } catch (Exception e) {
            System.out.println("Error: " + e);
        }
        return persons;
    }


//    public List findUserByCommonName(String commonName) {
//        AndFilter andFilter = new AndFilter();
//        andFilter.and(new EqualsFilter("objectclass","person"));
//        andFilter.and(new EqualsFilter("cn", commonName));
//        return ldapTemplate.search("", andFilter.encode(), new PersonAttributesMapper());
//    }
}