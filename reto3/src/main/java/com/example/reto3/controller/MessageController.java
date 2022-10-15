package com.example.reto3.controller;

import com.example.reto3.entities.Client;
import com.example.reto3.entities.Library;
import com.example.reto3.entities.Message;
import com.example.reto3.service.MessageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/Message")
public class MessageController {
    @Autowired
    private MessageService messageService;

    @GetMapping("/all")
    public List<Message> getAll(){
        return messageService.getAll();
    }
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Message save(@RequestBody Message p){
        return messageService.save(p);
   }
    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Message update(@RequestBody Message p){return messageService.update(p);}
    @DeleteMapping("/{idMessage}")
    public boolean delete(@PathVariable("idMessage") int idMessage){return messageService.delete(idMessage);}
}
