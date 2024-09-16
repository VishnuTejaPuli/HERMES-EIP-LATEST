package com.ust.support.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.ust.support.model.HelplineNumber;
import com.ust.support.model.HelplineWebsite;
import com.ust.support.service.HelplineService;

import java.util.List;

@RestController
@RequestMapping("/api/helplines")
public class HelplineController {

    @Autowired
    private HelplineService helplineService;

    // Helpline Number Endpoints
    @PostMapping("/setnumbers")
    public ResponseEntity<HelplineNumber> addHelplineNumber(@RequestBody HelplineNumber helplineNumber) {
        HelplineNumber savedHelplineNumber = helplineService.addHelplineNumber(helplineNumber);
        return ResponseEntity.ok(savedHelplineNumber);
    }

    @GetMapping("/getnumbers")
    public ResponseEntity<List<HelplineNumber>> getAllHelplineNumbers() {
        List<HelplineNumber> helplines = helplineService.getAllHelplineNumbers();
        return ResponseEntity.ok(helplines);
    }

    @GetMapping("/numbers/search")
    public ResponseEntity<List<HelplineNumber>> getHelplineNumbersByName(@RequestParam String name) {
        List<HelplineNumber> helplines = helplineService.getHelplineNumbersByName(name);
        return ResponseEntity.ok(helplines);
    }

    @GetMapping("/numbers/region")
public ResponseEntity<List<HelplineNumber>> getHelplineNumbersByRegion(@RequestParam String region) {
    List<HelplineNumber> helplines = helplineService.getHelplineNumbersByRegion(region);
    return ResponseEntity.ok(helplines);
}
    // Helpline Website Endpoints
    @PostMapping("/setwebsites")
    public ResponseEntity<HelplineWebsite> addHelplineWebsite(@RequestBody HelplineWebsite helplineWebsite) {
        HelplineWebsite savedHelplineWebsite = helplineService.addHelplineWebsite(helplineWebsite);
        return ResponseEntity.ok(savedHelplineWebsite);
    }

    @GetMapping("/getwebsites")
    public ResponseEntity<List<HelplineWebsite>> getAllHelplineWebsites() {
        List<HelplineWebsite> websites = helplineService.getAllHelplineWebsites();
        return ResponseEntity.ok(websites);
    }


    @GetMapping("/websites/search")
    public ResponseEntity<List<HelplineWebsite>> getHelplineWebsitesByName(@RequestParam String name) {
        List<HelplineWebsite> websites = helplineService.getHelplineWebsitesByName(name);
        return ResponseEntity.ok(websites);
    }

    @GetMapping("/websites/region")
public ResponseEntity<List<HelplineWebsite>> getHelplineWebsitesByRegion(@RequestParam String region) {
    List<HelplineWebsite> websites = helplineService.getHelplineWebsitesByRegion(region);
    return ResponseEntity.ok(websites);
}
}

