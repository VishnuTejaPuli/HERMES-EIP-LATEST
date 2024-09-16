package com.ust.support.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ust.support.model.HelplineNumber;

@Repository
public interface HelplineNumberRepository extends JpaRepository<HelplineNumber, Long> {
    List<HelplineNumber> findByNameContainingIgnoreCase(String name);
    List<HelplineNumber> findByRegionContainingIgnoreCase(String region);
}
