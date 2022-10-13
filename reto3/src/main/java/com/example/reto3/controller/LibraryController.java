package com.example.reto3.controller;

import com.example.reto3.entities.Library;
import com.example.reto3.service.LibraryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/Lib")
public class LibraryController {
    @Autowired
    private LibraryService libraryService;

    @GetMapping("/all")
    public List<Library> getAll(){
        return libraryService.getAll();
    }
    @PostMapping("/save")
    public Library save(@RequestBody Library c){
        return libraryService.save(c);
    }

}
