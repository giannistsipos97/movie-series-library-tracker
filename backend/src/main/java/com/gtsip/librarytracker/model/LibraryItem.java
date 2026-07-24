package com.gtsip.librarytracker.model;

public class LibraryItem {

    private Long id; //ακέραιο ID και μπορεί να είναι null
    private String title;
    private MediaType type;
    private LibraryStatus status;
    private Integer rating; //Integer και οχι int για να μπορει να ειναι και null οταν δεν εχει βαθμολογια
    private boolean favorite;

    public LibraryItem(Long id, String title, MediaType type, LibraryStatus status, Integer rating, boolean favorite) {
        this.id = id;
        this.title = title;
        this.type = type;
        this.status = status;
        this.rating = rating;
        this.favorite = favorite;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public MediaType getType() {
        return type;
    }

    public void setType(MediaType type) {
        this.type = type;
    }

    public LibraryStatus getStatus() {
        return status;
    }

    public void setStatus(LibraryStatus status) {
        this.status = status;
    }

    public Integer getRating() {
        return rating;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public boolean isFavorite() {
        return favorite;
    }

    public void setFavorite(boolean favorite) {
        this.favorite = favorite;
    }
}