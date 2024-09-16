package com.ust.iranonymous;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class IranonymousApplication {

	public static void main(String[] args) {
		SpringApplication.run(IranonymousApplication.class, args);
	}

}
