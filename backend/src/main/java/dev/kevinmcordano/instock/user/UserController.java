package dev.kevinmcordano.instock.user;

import java.util.Optional;

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
   public String login(
         @RequestBody LoginRequest loginRequest
   ) { 
      if(loginRequest == null) {
         return "Invalid employee number";
      }

      Optional<User> user = userRepository
         .getUserByEmployeeNumber(loginRequest.getEmployeeNumber());
      
      if(user.isEmpty()) {
         throw new UserNotFoundException();
      }
      
      String response = "Welcome, " + user.get().getFirstName();
      return "{\"message\":\"" + response + "\"}";
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
