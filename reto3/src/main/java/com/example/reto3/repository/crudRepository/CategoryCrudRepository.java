package com.example.reto3.repository.crudRepository;

import com.example.reto3.entities.Category;
import com.example.reto3.entities.Client;
import org.springframework.data.repository.CrudRepository;

public interface CategoryCrudRepository extends CrudRepository<Category,Integer> {
}
