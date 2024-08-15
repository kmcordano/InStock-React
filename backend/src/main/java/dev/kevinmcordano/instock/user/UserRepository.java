package dev.kevinmcordano.instock.user;

import org.springframework.jdbc.core.simple.JdbcClient;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class UserRepository {

   private final JdbcClient jdbcClient;

   public UserRepository(JdbcClient jdbcClient) {
      this.jdbcClient = jdbcClient;
   }

   public Optional<User> getUserByEmployeeNumber(int employeeNumber) {
      return jdbcClient.sql("SELECT id, first_name, last_name, employee_number FROM employee WHERE employee_number = ?")
               .param(employeeNumber)
               .query(User.class)
               .optional();
   }
}
