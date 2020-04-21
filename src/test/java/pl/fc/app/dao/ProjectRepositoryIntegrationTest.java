package pl.fc.app.dao;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import pl.fc.app.enities.Project;
import pl.fc.app.enities.enums.Status;

import static org.junit.Assert.assertEquals;

@SpringBootTest
@RunWith(SpringRunner.class)
public class ProjectRepositoryIntegrationTest {

    @Autowired
    IProjectRepository proRepo;

    @Test
    public void ifNewProjectSaved_thenSuccess() {
        Project newProject = new Project("New Test Project", Status.TO_BE_OPENED, "Test Description");
        proRepo.save(newProject);

        assertEquals(1, proRepo.findAll().size());
    }
}
