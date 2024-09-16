package com.ust.reliefcamps.controller;

import com.ust.reliefcamps.entity.ReliefCamp;
import com.ust.reliefcamps.service.ReliefCampService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/relief-camps")
public class ReliefCampController {

    @Autowired
    private ReliefCampService reliefCampService;

    @GetMapping("/getAll")
    public List<ReliefCamp> getAllReliefCamps() {
        return reliefCampService.getAllReliefCamps();
    }

    @GetMapping("/{id}")
    public ResponseEntity<ReliefCamp> getReliefCampById(@PathVariable Long id) {
        ReliefCamp reliefCamp = reliefCampService.getReliefCampById(id);
        if (reliefCamp != null) {
            return ResponseEntity.ok(reliefCamp);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping("/set")
    public ReliefCamp createReliefCamp(@RequestBody ReliefCamp reliefCamp) {
        return reliefCampService.createReliefCamp(reliefCamp);
    }

    @PutMapping("/updatecamps/{id}")
    public ResponseEntity<ReliefCamp> updateReliefCamp(@PathVariable Long id, @RequestBody ReliefCamp reliefCampDetails) {
        ReliefCamp updatedReliefCamp = reliefCampService.updateReliefCamp(id, reliefCampDetails);
        if (updatedReliefCamp != null) {
            return ResponseEntity.ok(updatedReliefCamp);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/deletecamps/{id}")
    public ResponseEntity<Void> deleteReliefCamp(@PathVariable Long id) {
        reliefCampService.deleteReliefCamp(id);
        return ResponseEntity.noContent().build();
    }

    @GetMapping("/name/{name}")
    public List<ReliefCamp> getReliefCampsByNameIgnoreCase(@PathVariable String name) {
        return reliefCampService.getReliefCampsByNameIgnoreCase(name);
    }

    @GetMapping("/location/{location}")
    public List<ReliefCamp> getReliefCampsByLocationIgnoreCase(@PathVariable String location) {
        return reliefCampService.getReliefCampsByLocationIgnoreCase(location);
    }
}
