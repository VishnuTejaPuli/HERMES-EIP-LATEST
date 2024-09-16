package com.ust.support.service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ust.support.model.HelplineNumber;
import com.ust.support.model.HelplineWebsite;
import com.ust.support.repository.HelplineNumberRepository;
import com.ust.support.repository.HelplineWebsiteRepository;

import java.util.List;
import java.util.Optional;

@Service
public class HelplineService {

    @Autowired
    private HelplineNumberRepository helplineNumberRepository;

    @Autowired
    private HelplineWebsiteRepository helplineWebsiteRepository;

    // Helpline Number Methods
    public HelplineNumber addHelplineNumber(HelplineNumber helplineNumber) {
        return helplineNumberRepository.save(helplineNumber);
    }

    public List<HelplineNumber> getAllHelplineNumbers() {
        return helplineNumberRepository.findAll();
    }


    public List<HelplineNumber> getHelplineNumbersByName(String name) {
        return helplineNumberRepository.findByNameContainingIgnoreCase(name);
    }

    public List<HelplineNumber> getHelplineNumbersByRegion(String region) {
    return helplineNumberRepository.findByRegionContainingIgnoreCase(region);
}

    // Helpline Website Methods
    public HelplineWebsite addHelplineWebsite(HelplineWebsite helplineWebsite) {
        return helplineWebsiteRepository.save(helplineWebsite);
    }

    public List<HelplineWebsite> getAllHelplineWebsites() {
        return helplineWebsiteRepository.findAll();
    }

    public List<HelplineWebsite> getHelplineWebsitesByName(String name) {
        return helplineWebsiteRepository.findByNameContainingIgnoreCase(name);
    }

    public List<HelplineWebsite> getHelplineWebsitesByRegion(String region) {
    return helplineWebsiteRepository.findByRegionContainingIgnoreCase(region);
}

}
