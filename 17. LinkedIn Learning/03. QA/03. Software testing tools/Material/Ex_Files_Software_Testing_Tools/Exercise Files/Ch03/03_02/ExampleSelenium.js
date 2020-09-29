package newproject;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
public class PG1 {


    public static void main(String[] args) {
    	System.setProperty("webdriver.firefox.marionette","C:\\geckodriver.exe");
		WebDriver driver = new FirefoxDriver();
    	
        String baseUrl = "https://www.linkedin.com/learning/";
        String expectedTitle = "LinkedIn Learning: Online Courses for Creative, Technology, Business Skills";
        String actualTitle = "";

        driver.get(baseUrl);
        actualTitle = driver.getTitle();

        if (actualTitle.contentEquals(expectedTitle)){
            System.out.println("Test Passed!");
        } else {
            System.out.println("Test Failed");
        }
       
        driver.close();
       
    }

}