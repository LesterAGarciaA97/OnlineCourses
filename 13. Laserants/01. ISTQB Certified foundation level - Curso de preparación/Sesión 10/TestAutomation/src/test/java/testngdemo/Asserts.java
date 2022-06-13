package testngdemo;

import org.testng.Assert;
import org.testng.annotations.Test;
import org.testng.asserts.SoftAssert;

public class Asserts {
    @Test
    public void hardAssertExample01(){
       String expectedesult = "hard assert";
       String actualresult = "fail";

        Assert.assertEquals(expectedesult,actualresult);

        System.out.print("This should not be executed");
    }

    @Test
    public void hardAssertExample02(){
        String expectedesult = "hard assert";
        String actualresult = "hard assert";

        Assert.assertEquals(expectedesult,actualresult);

        System.out.print("This should not be executed");
    }

    @Test
    public void softAssertExample01(){

        SoftAssert softAssert = new SoftAssert();

        softAssert.assertEquals(1,2,"Los números no son iguales");
        softAssert.assertEquals(1,3,"Los números no son iguales 2");
        softAssert.assertEquals(1,5,"Los números no son iguales 3");
        softAssert.assertEquals(5,5,"Los números si son iguales");

        softAssert.assertAll();
        System.out.println("This should be executed");
    }
}
