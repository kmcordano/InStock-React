package dev.kevinmcordano.instock.user;

public class User {
   private int    id;
   private String firstName;
   private String lastName;
   private int    employeeNumber;

   public User(
         int id,
         String firstName,
         String lastName,
         int employeeNumber
   ) {
      this.id = id;
      this.firstName = firstName;
      this.lastName = lastName;
      this.employeeNumber = employeeNumber;
   }

   public void setId(int id) { this.id = id; }
   public int getId() { return id; }

   public void setFirstName(String firstName) { this.firstName = firstName; }
   public String getFirstName() { return firstName; }

   public void setLastName(String lastName) { this.lastName = lastName; }
   public String getLastName() { return lastName; }

   public void setEmployeeNumber(int employeeNumber) { this.employeeNumber = employeeNumber; }
   public int getEmployeeNumber() { return employeeNumber; }
}
