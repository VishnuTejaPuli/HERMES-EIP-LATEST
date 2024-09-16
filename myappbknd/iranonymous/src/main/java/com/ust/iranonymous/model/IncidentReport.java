package com.ust.iranonymous.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Column;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "anonymous_report")
@Data
public class IncidentReport {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String reportId;

    @Column(nullable = false)
    private String reportCode;

    private String typeOfIncident;
    private String descriptionOfIncident;
    private LocalDateTime timeOfIncident;
    private String geotagging;
    private String location;
    private String status;
    private String message;
}
