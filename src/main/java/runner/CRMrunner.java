package runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:\\Users\\GOOD\\eclipse-workspace\\Cucum\\src\\main\\java\\Features\\crm.feature",glue="stepdef",plugin= {"pretty","html:test-output"},dryRun=false,monochrome=true,tags= {"@tag002"})

public class CRMrunner {

}
