package specs.login;

import auxiliar.TestBase;
import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;
import pages.LoginPage;
import pages.SideMenuBar;
import pages.TablesPage;
import utils.User;

import java.util.List;

public class Login extends TestBase {

    @Test
    public void LoginUser() {
        LoginPage loginPage = new LoginPage(getDriver());
        loginPage.login("test@test.com", "test");
    }

    @Test
    public void CreateAccount() {
        LoginPage loginPage = new LoginPage(getDriver());
        User user = new User();
        loginPage.createUser(user);
        System.out.println();
    }

    @Test
    public void NavigateSideMenuBar() {
        User user = new User();
        LoginPage loginPage = new LoginPage(getDriver());
        loginPage.login(user.getEmail(), user.getPassword());

        SideMenuBar sideMenuBar = new SideMenuBar(getDriver());
        sideMenuBar.clickTablesOption();
        sideMenuBar.clickComponentsOption();
        sideMenuBar.clickComponentsOption();
        sideMenuBar.clickUtilitiesOption();
        sideMenuBar.clickHomeOption();

    }

    @Test
    public void getElementsList() {
        User user = new User();
        LoginPage loginPage = new LoginPage(getDriver());
        loginPage.login(user.getEmail(), user.getPassword());

        SideMenuBar sideMenuBar = new SideMenuBar(getDriver());
        sideMenuBar.clickTablesOption();

        TablesPage tablesPage = new TablesPage(getDriver());
        List<WebElement> positions = tablesPage.getPositionsList();
        for (WebElement position: positions) {
            System.out.println("Position: " + position.getText());
        }

        List<WebElement> names = tablesPage.getNamesList();
        for (WebElement name: names) {
            System.out.println("Name: " + name.getText());
        }
    }

    @Test
    public void getBiggestAge() {
        User user = new User();
        LoginPage loginPage = new LoginPage(getDriver());
        loginPage.login(user.getEmail(), user.getPassword());

        SideMenuBar sideMenuBar = new SideMenuBar(getDriver());
        sideMenuBar.clickTablesOption();

        TablesPage tablesPage = new TablesPage(getDriver());
        List<WebElement> ages = tablesPage.getAgeList();

        int older = 0;
        for (WebElement age: ages) {
            int personAge = Integer.parseInt(age.getText());
            if (personAge > older) older = personAge;
        }

        System.out.println("La edad más alta es: " + older);
    }

}
