package com.example.reto3.controller;

import com.example.reto3.entities.Category;
import com.example.reto3.entities.Client;
import com.example.reto3.service.CategoryService;
import com.example.reto3.service.ClientService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/Category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @GetMapping("/all")
    public List<Category> getAll(){
        return categoryService.getAll();
    }
    @PostMapping("/save")
    public Category save(@RequestBody Category c){
        return categoryService.save(c);
    }

}
