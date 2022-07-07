package com.example.demonotes.repository;

import com.example.demonotes.model.Note;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

import java.util.List;

@RepositoryRestResource
@CrossOrigin
public interface NoteRepository extends PagingAndSortingRepository<Note, Long> {

    List<Note> findByTitle(@Param("title") String title);

}