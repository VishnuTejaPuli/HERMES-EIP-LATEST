package com.ust.ircommon.repository;

import com.ust.ircommon.entity.Incident;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IncidentRepository extends JpaRepository<Incident, Long> {
    List<Incident> findByIncidentTypeContainingIgnoreCase(String incidentType);
}
