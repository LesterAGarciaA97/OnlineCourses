package Ejemplo01;

import java.util.Date;

public class Empleado extends Persona{

    //Parameters definition
    private int idEmpleado;
    private int sueldo;

    //Constructor definition
    public Empleado(int idPersona, String nombre, String apellido, int edadPersona, int idEmpleado, int sueldo){
        super(idPersona, nombre, apellido, edadPersona);
        this.idEmpleado = idEmpleado;
        this.sueldo = sueldo;
    }

    //Getters and setters definition
    public int getIdEmpleado() {
        return idEmpleado;
    }

    public void setIdEmpleado(int idEmpleado) {
        this.idEmpleado = idEmpleado;
    }

    public int getSueldo() {
        return sueldo;
    }

    public void setSueldo(int sueldo) {
        this.sueldo = sueldo;
    }

    //ToString method definition
    @Override
    public String toString() {
        return super.toString() + " - Empleado{" + "idEmpleado=" + idEmpleado + ", sueldo=" + sueldo + '}';
    }
}
