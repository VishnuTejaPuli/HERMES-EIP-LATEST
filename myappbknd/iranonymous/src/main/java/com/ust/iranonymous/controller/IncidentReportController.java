package com.ust.iranonymous.controller;

import com.ust.iranonymous.model.IncidentReport;
import com.ust.iranonymous.service.IncidentReportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/reports")
public class IncidentReportController {

    @Autowired
    private IncidentReportService service;

    @GetMapping("/getAll")
    public List<IncidentReport> getAllReports() {
        return service.getAllReports();
    }

    @GetMapping("/{id}")
    public ResponseEntity<IncidentReport> getReportById(@PathVariable Long id) {
        return service.getReportById(id)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/find")
    public ResponseEntity<IncidentReport> getReportByReportIdAndReportCode(@RequestParam String reportId, @RequestParam Long reportCode) {
        return service.getReportByReportIdAndReportCode(reportId, reportCode)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<IncidentReport> createReport(@RequestBody IncidentReport report) {
try {
            // Call the service to create the report
            IncidentReport createdReport = service.createReport(report);
            System.out.println("Created");
            // Return response with created report and HTTP status 201 (Created)
            return new ResponseEntity<>(createdReport, HttpStatus.CREATED);
        } catch (Exception e) {
            // Return error response with HTTP status 500 (Internal Server Error)
            return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
        }    }

    @PutMapping("/{id}")
    public ResponseEntity<IncidentReport> updateReport(@PathVariable Long id, @RequestBody IncidentReport reportDetails) {
        return ResponseEntity.ok(service.updateReport(id, reportDetails));
    }

    @PatchMapping("/{id}/status")
    public ResponseEntity<IncidentReport> patchStatus(@PathVariable Long id, @RequestParam String status) {
        return service.patchStatus(id, status)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @PatchMapping("/{id}/message")
    public ResponseEntity<IncidentReport> patchMessage(@PathVariable Long id, @RequestParam String message) {
        return service.patchMessage(id, message)
            .map(ResponseEntity::ok)
            .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReport(@PathVariable Long id) {
        service.deleteReport(id);
        return ResponseEntity.noContent().build();
    }
}
