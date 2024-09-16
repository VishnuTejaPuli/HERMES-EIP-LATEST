package com.ust.iranonymous.repository;

import com.ust.iranonymous.model.IncidentReport;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface IncidentReportRepository extends JpaRepository<IncidentReport, Long> {
    Optional<IncidentReport> findByReportIdAndReportCode(String reportId, String reportCode);
}
