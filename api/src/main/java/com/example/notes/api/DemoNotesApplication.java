package com.example.notes.api;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@EnableTransactionManagement
@EnableJpaAuditing
@SpringBootApplication
public class DemoNotesApplication {

	public static void main(String[] args) {
		SpringApplication.run(DemoNotesApplication.class, args);
	}

}
