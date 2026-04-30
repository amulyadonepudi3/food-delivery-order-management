package com.example.ordermanagement.service;

import com.example.ordermanagement.model.MenuItem;
import com.example.ordermanagement.repository.MenuRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MenuService {

    private final MenuRepository menuRepository;

    public List<MenuItem> getMenu() {
        return menuRepository.findAll();
    }
}