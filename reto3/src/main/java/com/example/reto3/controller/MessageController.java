package com.example.reto3.controller;

import com.example.reto3.entities.Message;
import com.example.reto3.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
<<<<<<< HEAD
@RequestMapping("/api/Message")
=======
@RequestMapping("api/Message")
>>>>>>> 7e6097a74f4c4d42389d5982489b175685156128
public class MessageController {
    @Autowired
    private MessageService messageService;

    @GetMapping("/all")
    public List<Message> getAll(){
        return messageService.getAll();
    }
    @PostMapping("/save")
    public Message save(@RequestBody Message p){
        return messageService.save(p);
   }

}
