package com.example.reto3.service;

import com.example.reto3.entities.Reservation;
import com.example.reto3.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;
    public List<Reservation> getAll(){
        return reservationRepository.getAll();
    }
    public Reservation save(Reservation r){
        if(r.getIdReservation()== null){
            r.setStatus("created");
            return reservationRepository.save(r);


        }
        else{
            Optional<Reservation> st= reservationRepository.getById(r.getIdReservation());
            if(!st.isPresent()){
                return reservationRepository.save(r);
            }
            else{
                return r;
            }
        }
    }
    public Reservation update(Reservation r){
        if(r.getIdReservation()!= null){
            Optional<Reservation> st= reservationRepository.getById(r.getIdReservation());
            if(st.isPresent()){
                Reservation temp= st.get();
                if(r.getStartDate()!= null){
                    temp.setStartDate(r.getStartDate());
                }
                if(r.getDevolutionDate()!= null){
                    temp.setDevolutionDate(r.getDevolutionDate());
                }
                if(r.getStatus() == null){
                    temp.setStatus(r.getStatus());
                }
                if(r.getClient()!= null){
                    temp.setClient(r.getClient());
                }
                return reservationRepository.save(temp);
            }
        }
        return r;
    }
}
