package com.gtsip.librarytracker.service;

import com.gtsip.librarytracker.model.LibraryItem;
import com.gtsip.librarytracker.model.LibraryStatus;
import com.gtsip.librarytracker.model.MediaType;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service //λέει στο Spring να δημιουργήσει και να διαχειριστεί ένα αντικείμενο LibraryItemService
public class LibraryItemService {

    //λίστα που δέχεται μόνο αντικείμενα LibraryItem
    //final = η μεταβλητή items θα δείχνει πάντα στην ίδια λίστα. Τα περιεχόμενα της λίστας μπορούν να αλλάζουν.
    private final List<LibraryItem> items = new ArrayList<>(List.of(
            new LibraryItem(
                    1L,
                    "Dune: Part Two",
                    MediaType.MOVIE,
                    LibraryStatus.COMPLETED,
                    9,
                    false
            ),
            new LibraryItem(
                    2L,
                    "Shogun",
                    MediaType.SERIES,
                    LibraryStatus.WATCHING,
                    8,
                    false
            ),
            new LibraryItem(
                    3L,
                    "The Bear",
                    MediaType.SERIES,
                    LibraryStatus.TO_WATCH,
                    null, //δεν εχει βαθμολογηθει
                    true
            )
    ));

    public List<LibraryItem> getAll() {
        return items;
    }
}
