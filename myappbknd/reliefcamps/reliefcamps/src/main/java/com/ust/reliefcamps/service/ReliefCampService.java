package com.ust.reliefcamps.service;

import com.ust.reliefcamps.entity.ReliefCamp;
import com.ust.reliefcamps.repository.ReliefCampRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReliefCampService {

    @Autowired
    private ReliefCampRepository reliefCampRepository;

    public List<ReliefCamp> getAllReliefCamps() {
        return reliefCampRepository.findAll();
    }

    public ReliefCamp getReliefCampById(Long id) {
        return reliefCampRepository.findById(id).orElse(null);
    }

    public ReliefCamp createReliefCamp(ReliefCamp reliefCamp) {
        return reliefCampRepository.save(reliefCamp);
    }

    public ReliefCamp updateReliefCamp(Long id, ReliefCamp reliefCampDetails) {
        ReliefCamp reliefCamp = reliefCampRepository.findById(id).orElse(null);
        if (reliefCamp != null) {
            reliefCamp.setName(reliefCampDetails.getName());
            reliefCamp.setLocation(reliefCampDetails.getLocation());
            reliefCamp.setCapacity(reliefCampDetails.getCapacity());
            reliefCamp.setContactNumber(reliefCampDetails.getContactNumber());
            return reliefCampRepository.save(reliefCamp);
        }
        return null;
    }

    public void deleteReliefCamp(Long id) {
        reliefCampRepository.deleteById(id);
    }

    public List<ReliefCamp> getReliefCampsByNameIgnoreCase(String name) {
        return reliefCampRepository.findByNameContainingIgnoreCase(name);
    }

    public List<ReliefCamp> getReliefCampsByLocationIgnoreCase(String location) {
        return reliefCampRepository.findByLocationContainingIgnoreCase(location);
    }
}
