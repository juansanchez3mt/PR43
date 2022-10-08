package com.example.reto3.repository;

import com.example.reto3.entities.Product;
import com.example.reto3.repository.crudRepository.ProductCrudRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ProductRepository {

    @Autowired
    private ProductCrudRepository productCrudRepository;

    //trae los objetos en la tabla
    public List<Product> getAll(){
        return (List<Product>) productCrudRepository.findAll();
    }
    public Optional<Product> getProduct(int id){
        return productCrudRepository.findById(id);
    }

    //guarda datos o los actualiza
    public Product save(Product p){
        return productCrudRepository.save(p);
    }
    //borra datos
    public void delete(Product p){
        productCrudRepository.delete(p);
    }
}
