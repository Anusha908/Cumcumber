package stepdef;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class CRMstepdef {
	WebDriver driver;
	@Given("the user opens the browser")
	public void the_user_opens_the_browser() {
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\GOOD\\Downloads\\chromedriver_win32\\chromedriver.exe");
	    driver = new ChromeDriver();
		
	}

	@When("the user opens the application")
	public void the_user_opens_the_application() {
		driver.get("https://ui.freecrm.com/");
	}

	@Then("the user enters the username {string} and password {string}")
	public void the_user_enters_the_username_and_password(String un, String pwd) {
		driver.findElement(By.xpath("//input[@name='email']")).sendKeys(un);
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys(pwd);
	}

	@Then("click on Login button")
	public void click_on_Login_button() {
		driver.findElement(By.xpath("//div[text()='Login']")).click(); 
	}

	@Then("Verify the title")
	public void verify_the_title() {
	    System.out.println(driver.getTitle());
		
	}

	
	
	@Given("click on contacts link")
	public void click_on_contacts_link() {
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//*[text()='Contacts']")).click();	
		
	}

	@Then("click on New")
	public void click_on_New() {
	    
		  driver.findElement(By.xpath("//a[@href='/contacts/new']")).click();
		
	}

	@Then("enter the {string}, {string}")
	public void enter_the_and(String fn, String ln) {
		driver.findElement(By.xpath("//input[@name='first_name']")).sendKeys(fn);
		driver.findElement(By.xpath("//input[@name='last_name']")).sendKeys(ln);
	//	driver.findElement(By.xpath("//div[@name='company']")).sendKeys(com);
		
		
	}

	@Then("click on save")
	public void click_on_save() {
	   
		WebElement d = driver.findElement(By.xpath("html/body/div/div/div[2]/div[2]/div/div/div[2]/div/button[2]"));
		WebDriverWait wait = new WebDriverWait(driver, 25);
		wait.until(ExpectedConditions.elementToBeClickable(d));
		d.click();
		
		
	}

	

	

	
	
	
	
	
	
	
	
	
	
	
	
}
