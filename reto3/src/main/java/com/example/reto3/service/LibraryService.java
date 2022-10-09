package com.example.reto3.service;

import com.example.reto3.entities.Client;
import com.example.reto3.entities.Library;
import com.example.reto3.repository.ClientRepository;
import com.example.reto3.repository.LibraryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class LibraryService {
    @Autowired
    private LibraryRepository libraryRepository;

    public List<Library> getAll(){
        return libraryRepository.getAll();
    }
    public Optional<Library> getLibrary(int id){
        return libraryRepository.getLibrary(id);
    }

    public Library save(Library c){
        if(c.getId()==null){
            return libraryRepository.save(c);

        }else {
            Optional<Library> e = libraryRepository.getLibrary(c.getId());
            if (e.isPresent()){
                return c;
            }else {
                return libraryRepository.save(c);
            }
        }
    }
    public Library update(Library c){
        if(c.getId()!=null){
            Optional<Library> q = libraryRepository.getLibrary(c.getId());
            if (q.isPresent()){
                if(c.getName()!=null){
                    q.get().setName(c.getName());
                }
                if(c.getTarget()!=null){
                    q.get().setTarget(c.getTarget());
                }
                if(c.getCapacity()!=null){
                    q.get().setCapacity(c.getCapacity());
                }
                if(c.getDescription()!=null){
                    q.get().setDescription(c.getDescription());
                }
                libraryRepository.save(q.get());
                return q.get();
            }else{
                return c;
            }

        }else{
            return  c;
        }
    }
    public boolean delete(int id){
        boolean flag=false;
        Optional<Library>p= libraryRepository.getLibrary(id);
        if (p.isPresent()){
            libraryRepository.delete(p.get());
            flag=true;
        }

        return flag;
    }
}
