package com.springrest.ecommerce.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.springrest.ecommerce.model.Category;

public interface CategoryRepo  extends JpaRepository<Category, Long> {

}
