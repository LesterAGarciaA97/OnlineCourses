package testingparameters;

import org.testng.annotations.Parameters;
import org.testng.annotations.Test;

public class TestngParametersExample {

    @Test
    @Parameters({"FirstNumber", "SecondNumber"})
    //Mandatory parameters
    public void sumarNumeros(int numero1, int numero2){
        //Optional parameters
        // public void sumarNumeros(@Optional String numero1, String numero2){
        int resultado = numero1 + numero2;
        System.out.println("El resultado de la suma " + numero1 + " + " + numero2 + " es = " + resultado );
        //System.out.println("El resultado de la suma " + numero1 + " + " + numero2);
    }
}