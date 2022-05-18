package Ejemplo01;

public class EjecutarEjemplo01 {
    public static void main(String args[]){

        Cliente c = new Cliente(1,"jose","wolff", 29,1);
        System.out.println(c.toString());

        System.out.println(c.getContadorPersona());

        Empleado e1 =  new Empleado(2,"andres","ferguson", 29, 2,2500);
        System.out.println(e1.toString());
        System.out.println(e1.getContadorPersona());

        Persona p1 =  new Persona(3, "JUAN", "RAMIREZ", 90);
        System.out.println(p1.toString());
        System.out.println(e1.getContadorPersona());
    }
}
