package guru99Application;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class Guru99ApplicationTest {
	ChromeDriver driver;
	String url = "http://demo.guru99.com/v4/";
	@Test (priority = -100)
	public void invokeBrowser() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\Administrator\\Desktop\\Selenium Testing\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get(url);
	}
	
	@Test(priority = 0)
	public void verifyTitleOfThePage() {
		String expectedTitle = "guru99 Bank Home Page";
		String actualTitle = driver.getTitle();
		Assert.assertEquals(actualTitle, expectedTitle);
	}
	
	@Test (priority = 100)
	public void verifyLoginToGuru99Application() {
		WebElement userId = driver.findElement(By.name("uid"));
		WebElement userPassword = driver.findElement(By.name("password"));
		WebElement loginButton = driver.findElement(By.name("btnLogin"));
		userId.sendKeys("mngr270475");
		userPassword.sendKeys("YrYgUbE");
		loginButton.click();
	}
	
	@Test (priority = 200)
	public void addCustomer() {
		WebElement addCustomerLink = driver.findElement(By.linkText("New Customer"));
		addCustomerLink.click();
		driver.findElement(By.xpath("//input[@value='f']")).click();
		driver.findElement(By.name("name")).sendKeys("Saurabh Dhingra");
		driver.findElement(By.name("dob")).sendKeys("06/06/1989");
		driver.findElement(By.name("addr")).sendKeys("Gurgaon");
		driver.findElement(By.name("city")).sendKeys("Gurugram");
		driver.findElement(By.name("state")).sendKeys("Haryana");
		driver.findElement(By.name("pinno")).sendKeys("122001");
		driver.findElement(By.name("telephoneno")).sendKeys("97834523576");
		driver.findElement(By.name("emailid")).sendKeys("abc32@xyze.com");
		driver.findElement(By.name("password")).sendKeys("poiy@123");
		driver.findElement(By.name("sub")).click();
	}
	
	@Test (priority = 400)
	public void GetCustomerId() {
		String customerID = driver.findElement(By.xpath("//table[@id='customer']/tbody/tr[4]/td[2]")).getText();
		System.out.println("Customer Id - "+ customerID);
	}
}
