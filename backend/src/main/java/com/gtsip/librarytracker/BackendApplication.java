package com.gtsip.librarytracker;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication //ενεργοποιεί το Spring Boot configuration και την αναζήτηση Spring components.
public class BackendApplication {

    //main: ο σημείο από όπου ξεκινά η εφαρμογή
    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args); //ξεκινά το Spring και τον ενσωματωμένο web server.
    }

}
