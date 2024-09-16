package com.ust.support.repository;


import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ust.support.model.HelplineWebsite;

@Repository
public interface HelplineWebsiteRepository extends JpaRepository<HelplineWebsite, Long> {
    List<HelplineWebsite> findByNameContainingIgnoreCase(String name);
    List<HelplineWebsite> findByRegionContainingIgnoreCase(String region);

}

