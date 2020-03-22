package Cucumberlea.Cucum;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.sikuli.script.FindFailed;
import org.sikuli.script.Pattern;
import org.sikuli.script.Screen;







public class sikuliconcept {

	public static void main(String[] args) throws FindFailed {
		// TODO Auto-generated method stub

		System.setProperty("webdriver.chrome.driver", "C:\\Users\\GOOD\\Downloads\\chromedriver_win32\\chromedriver.exe");
		WebDriver driver = new ChromeDriver();
		driver.get("https://www.youtube.com/watch?v=Ov0YGGSY6gY");
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
	Screen s = new Screen();
	//Pattern p = new Pattern("C:\\Users\\GOOD\\Desktop\\skipads.png");
	//s.wait(p,2000);
		//s.click();
		Pattern p2 = new Pattern("C:\\Users\\GOOD\\Desktop\\set.png");
		s.wait(p2,2000);
			s.click();	
		Pattern p1 = new Pattern("C:\\Users\\GOOD\\Desktop\\full.png");
		s.wait(p1,2000);
			s.click();	
		
		
	}

}
