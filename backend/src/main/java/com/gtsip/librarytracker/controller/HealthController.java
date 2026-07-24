package com.gtsip.librarytracker.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController //δηλώνει ότι η κλάση δέχεται HTTP requests και επιστρέφει δεδομένα.
@RequestMapping("/api/v1") //κοινό prefix όλων των endpoints της κλάσης.
public class HealthController {

    @GetMapping("/health") //συνδέει ένα GET /api/v1/health με τη μέθοδο.
    public Map<String, String> health() { //περιέχει ζεύγη κλειδιού–τιμής.
        return Map.of("status", "UP");
    }
}