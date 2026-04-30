package com.example.ordermanagement.repository;

import com.example.ordermanagement.model.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MenuRepository extends JpaRepository<MenuItem, Long> {
}