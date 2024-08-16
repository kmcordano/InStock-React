package dev.kevinmcordano.instock.user;

import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
   private final UserRepository userRepository;

   public UserController(UserRepository userRepository) {
      this.userRepository = userRepository;
   }

   @PostMapping("/login")
   @CrossOrigin(origins = "*")
   public ResponseEntity<?> login(
         @RequestBody LoginRequest loginRequest
   ) { 
      if(loginRequest == null) {
         return ResponseEntity
            .badRequest()
            .body(new ErrorDetails("No login input"));
      }

      Optional<User> user = userRepository
         .getUserByEmployeeNumber(loginRequest.getEmployeeNumber());
      
      if(user.isEmpty()) {
         return ResponseEntity
            .badRequest()
            .body(new ErrorDetails("Incorrect employee number"));
      }
      
      return ResponseEntity
         .status(HttpStatus.ACCEPTED)
         .body(new LoginResponse(
            user.get().getEmployeeNumber(),
            user.get().getFirstName(),
            user.get().getLastName()
         ));
   }
}

class LoginRequest {
   private int employeeNumber;

   public LoginRequest(int employeeNumber) {
      this.employeeNumber = employeeNumber;
   }

   public LoginRequest() {
      this(-1);
   }

   public void setEmployeeNumber(int employeeNumber) { this.employeeNumber = employeeNumber; }
   public int getEmployeeNumber() { return employeeNumber; }
}

class LoginResponse {
   private int employeeNumber;
   private String firstName;
   private String lastName;

   public LoginResponse(int employeeNumber, String firstName, String lastName) {
      this.employeeNumber = employeeNumber;
      this.firstName = firstName;
      this.lastName = lastName;
   }

   public LoginResponse() {
      this(-1, "", "");
   }

   public int getEmployeeNumber() { return employeeNumber; }
   public String getFirstName() { return firstName; }
   public String getLastName() { return lastName; }
}
