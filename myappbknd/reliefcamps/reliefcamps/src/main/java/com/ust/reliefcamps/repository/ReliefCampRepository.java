package com.ust.reliefcamps.repository;

import com.ust.reliefcamps.entity.ReliefCamp;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ReliefCampRepository extends JpaRepository<ReliefCamp, Long> {

List<ReliefCamp> findByNameContainingIgnoreCase(String name);

List<ReliefCamp> findByLocationContainingIgnoreCase(String location);
}
