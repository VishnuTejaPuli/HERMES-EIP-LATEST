package com.ust.ircommon.service;

import com.ust.ircommon.entity.Incident;
import com.ust.ircommon.repository.IncidentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class IncidentService {

    @Autowired
    private IncidentRepository incidentRepository;

    public List<Incident> getAllIncidents() {
        return incidentRepository.findAll();
    }

    public Incident reportIncident(Incident incident) {
        return incidentRepository.save(incident);
    }

    public List<Incident> getIncidentsByType(String incidentType) {
        return incidentRepository.findByIncidentTypeContainingIgnoreCase(incidentType);
    }

    public Incident updateIncident(Long id, Incident updatedIncident) {
        return incidentRepository.findById(id).map(incident -> {
            incident.setStatus(updatedIncident.getStatus());
            incident.setResolved(updatedIncident.getResolved());
            incident.setNumberOfPeopleStuck(updatedIncident.getNumberOfPeopleStuck());
            incident.setResourcesRequired(updatedIncident.getResourcesRequired());
            return incidentRepository.save(incident);
        }).orElse(null);
    }

    public void deleteIncident(Long id) {
        incidentRepository.deleteById(id);
    }
}
