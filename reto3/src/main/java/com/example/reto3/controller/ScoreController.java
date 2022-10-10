package com.example.reto3.controller;

import com.example.reto3.entities.Score;
import com.example.reto3.services.ScoreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/Score")
public class ScoreController {
    @Autowired
    private ScoreService scoreService;
    @GetMapping("/all")
    public List<Score> getAll(){
        return scoreService.getAll();
    }
    @PostMapping("/save")
    public Score save(@RequestBody Score s){
        return scoreService.save(s);
    }
    @PutMapping("/update")
    public Score update(@RequestBody Score s){
        return scoreService.update(s);
    }
}

