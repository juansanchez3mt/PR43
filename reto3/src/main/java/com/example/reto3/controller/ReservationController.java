package com.example.reto3.controller;

import com.example.reto3.entities.Category;
import com.example.reto3.entities.Library;
import com.example.reto3.entities.Reservation;

import com.example.reto3.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/Reservation")
public class ReservationController {
    @Autowired
    private ReservationService reservationService;
    @GetMapping("/all")
    public List<Reservation> getAll(){
        return reservationService.getAll();
    }
    @GetMapping("/{idReservation}")
    public Optional<Reservation> getById(@PathVariable("idReservation") int idReservation) {
        return reservationService.getById(idReservation);
    }
    @PostMapping("/save")
    @ResponseStatus(HttpStatus.CREATED)
    public Reservation save(@RequestBody Reservation r){
        return reservationService.save(r);
    }
    @PutMapping("/update")
    @ResponseStatus(HttpStatus.CREATED)
    public Reservation update(@RequestBody Reservation r){
        return reservationService.update(r);
    }
    @DeleteMapping("/{idReservation}")
    public boolean delete(@PathVariable("idReservation") int idReservation){return reservationService.delete(idReservation);}
}
