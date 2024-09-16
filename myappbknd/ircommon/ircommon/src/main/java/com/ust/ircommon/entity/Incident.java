package com.ust.ircommon.entity;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import lombok.Data;

import java.time.LocalDateTime;

@Entity
@Data
public class Incident {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Size(min = 5, max = 100)
    private String incidentType; // e.g., "Child Safety", "Women Safety", etc.

    @NotNull
    @Size(min = 10, max = 500)
    private String description;

    @NotNull
    private LocalDateTime timeOfIncident;

    private String geotagging; // Could be a string with latitude and longitude (e.g., "37.7749,-122.4194")

    private int numberOfPeopleStuck;

    private String resourcesRequired;

    @NotNull
    private String location;

    private Boolean resolved = false;

    private String status = "Pending"; // "Pending", "In Progress", "Resolved"

    @PrePersist
    public void prePersist() {
        if (timeOfIncident == null) {
            timeOfIncident = LocalDateTime.now();
        }
    }
}
