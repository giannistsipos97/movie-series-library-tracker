package com.gtsip.librarytracker.controller;

import com.gtsip.librarytracker.model.LibraryItem;
import com.gtsip.librarytracker.service.LibraryItemService;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController //δηλώνει ότι η κλάση δέχεται HTTP requests και επιστρέφει δεδομένα.
@RequestMapping("/api/v1/library-items") //endpoints της κλάσης.
public class LibraryItemController {

    private final LibraryItemService libraryItemService;

    public LibraryItemController(LibraryItemService libraryItemService) {
        this.libraryItemService = libraryItemService;
    }

    @GetMapping //συνδέει ένα GET /api/v1/library-items με τη μέθοδο.
    public List<LibraryItem> getAll() {
        return libraryItemService.getAll();
    }
}
