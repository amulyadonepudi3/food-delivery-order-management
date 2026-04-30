package com.example.ordermanagement.controller;

import com.example.ordermanagement.model.MenuItem;
import com.example.ordermanagement.service.MenuService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/menu")
@CrossOrigin
@RequiredArgsConstructor
public class MenuController {

    private final MenuService menuService;

    @GetMapping
    public List<MenuItem> getMenu() {
        return menuService.getMenu();
    }
}