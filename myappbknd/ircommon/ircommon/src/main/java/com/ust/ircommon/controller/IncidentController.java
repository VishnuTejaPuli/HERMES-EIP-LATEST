package com.ust.ircommon.controller;

import com.ust.ircommon.entity.Incident;
import com.ust.ircommon.service.IncidentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/incidents")
public class IncidentController {

    @Autowired
    private IncidentService incidentService;

    @GetMapping("/getAll")
    public List<Incident> getAllIncidents() {
        return incidentService.getAllIncidents();
    }

    @PostMapping("/reportincident")
    public ResponseEntity<Incident> reportIncident(@RequestBody Incident incident) {
        Incident reportedIncident = incidentService.reportIncident(incident);
        return ResponseEntity.ok(reportedIncident);
    }

    @GetMapping("/type/{incidentType}")
    public List<Incident> getIncidentsByType(@PathVariable String incidentType) {
        return incidentService.getIncidentsByType(incidentType);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Incident> updateIncident(@PathVariable Long id, @Valid @RequestBody Incident updatedIncident) {
        Incident incident = incidentService.updateIncident(id, updatedIncident);
        if (incident != null) {
            return ResponseEntity.ok(incident);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteIncident(@PathVariable Long id) {
        incidentService.deleteIncident(id);
        return ResponseEntity.noContent().build();
    }
}
