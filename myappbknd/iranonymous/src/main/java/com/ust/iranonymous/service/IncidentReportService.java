package com.ust.iranonymous.service;

import com.ust.iranonymous.model.IncidentReport;
import com.ust.iranonymous.repository.IncidentReportRepository;
import com.ust.iranonymous.util.EncryptionUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class IncidentReportService {

    @Autowired
    private IncidentReportRepository repository;

    public List<IncidentReport> getAllReports() {
        return repository.findAll();
    }

    public Optional<IncidentReport> getReportById(Long id) {
        return repository.findById(id);
    }

    public Optional<IncidentReport> getReportByReportIdAndReportCode(String reportId, Long reportCode) {
        try {
            String encryptedReportId = EncryptionUtil.encrypt(reportId);
            String encryptedReportCode = EncryptionUtil.encrypt(String.valueOf(reportCode));
            return repository.findByReportIdAndReportCode(encryptedReportId, (encryptedReportCode));
        } catch (Exception e) {
            throw new RuntimeException("Error while decrypting reportId or reportCode", e);
        }
    }

    public IncidentReport createReport(IncidentReport report) {
    try {
        // Encrypt the reportId and reportCode, and store them as strings
        String encryptedReportId = EncryptionUtil.encrypt(report.getReportId());
        String encryptedReportCode = EncryptionUtil.encrypt(report.getReportCode());

        // Set the encrypted values
        report.setReportId(encryptedReportId);  // Assuming reportId is a String field
        report.setReportCode(encryptedReportCode);  // Assuming reportCode is also a String field

        // Continue with saving the report...
        return repository.save(report);
    } catch (Exception e) {
        throw new RuntimeException("Error while encrypting reportId or reportCode", e);
    }
}


    public IncidentReport updateReport(Long id, IncidentReport reportDetails) {
        return repository.findById(id)
            .map(report -> {
                try {
                    report.setTypeOfIncident(reportDetails.getTypeOfIncident());
                    report.setDescriptionOfIncident(reportDetails.getDescriptionOfIncident());
                    report.setTimeOfIncident(reportDetails.getTimeOfIncident());
                    report.setGeotagging(reportDetails.getGeotagging());
                    report.setLocation(reportDetails.getLocation());
                    report.setStatus(reportDetails.getStatus());
                    report.setMessage(reportDetails.getMessage());

                    report.setReportId(EncryptionUtil.encrypt(reportDetails.getReportId()));
                    report.setReportCode(EncryptionUtil.encrypt(String.valueOf(reportDetails.getReportCode())));
                    
                    return repository.save(report);
                } catch (Exception e) {
                    throw new RuntimeException("Error while encrypting reportId or reportCode", e);
                }
            })
            .orElseThrow(() -> new RuntimeException("Report not found with id " + id));
    }

    public void deleteReport(Long id) {
        repository.deleteById(id);
    }

    public Optional<IncidentReport> patchStatus(Long id, String status) {
        return repository.findById(id)
            .map(report -> {
                report.setStatus(status);
                return repository.save(report);
            });
    }

    public Optional<IncidentReport> patchMessage(Long id, String message) {
        return repository.findById(id)
            .map(report -> {
                report.setMessage(message);
                return repository.save(report);
            });
    }
}
