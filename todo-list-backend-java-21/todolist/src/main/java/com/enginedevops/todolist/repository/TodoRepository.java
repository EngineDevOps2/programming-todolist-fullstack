package com.enginedevops.todolist.repository;

import com.enginedevops.todolist.model.Todo;
import org.jooq.DSLContext;
import org.jooq.Record;
import org.jooq.Result;
import org.springframework.stereotype.Repository;

import java.util.List;

import static com.enginedevops.todolist.jooq.tables.Todolist.TODOLIST; 

// Adjust this import based on your generated jOOQ classes

@Repository
public class TodoRepository {

    private final DSLContext dsl;

    public TodoRepository(DSLContext dsl) {
        this.dsl = dsl;
    }

    public List<Todo> findAll() {
        Result<Record> result = dsl.select().from(TODOLIST).fetch();
        return result.map(record -> {
            Todo todo = new Todo();
            todo.setId(record.get(TODOLIST.ID));
            todo.setTitle(record.get(TODOLIST.TITLE));
            todo.setCompleted(record.get(TODOLIST.COMPLETED));
            return todo;
        });
    }


//        public List<Todo> findAll() {
//        Result<Record> result = dsl.select().from().fetch(TODOLIST);
//        return result.into(Todo.class); // Adjust based on your Todo class mapping
//    }

    public Todo save(Todo todo) {
        if (todo.getId() == null) {
            // Insert new Todo
            Long id = dsl.insertInto(TODOLIST)
                    .set(TODOLIST.TITLE, todo.getTitle())
                    .set(TODOLIST.COMPLETED, todo.isCompleted())
                    .returning(TODOLIST.ID)
                    .fetchOne()
                    .getValue(TODOLIST.ID);
            todo.setId(id);
        } else {
            // Update existing Todo
            dsl.update(TODOLIST)
                .set(TODOLIST.TITLE, todo.getTitle())
                .set(TODOLIST.COMPLETED, todo.isCompleted())
                .where(TODOLIST.ID.eq(todo.getId()))
                .execute();
        }
        return todo;
    }

    public void delete(Long id) {
        dsl.deleteFrom(TODOLIST)
            .where(TODOLIST.ID.eq(id))
            .execute();
    }

    public Todo findById(Long id) {
        Record record = dsl.select().from(TODOLIST).where(TODOLIST.ID.eq(id)).fetchOne();
        if (record != null) {
            Todo todo = new Todo();
            todo.setId(record.get(TODOLIST.ID));
            todo.setTitle(record.get(TODOLIST.TITLE));
            todo.setCompleted(record.get(TODOLIST.COMPLETED));
            return todo;
        }
        return null; // or throw an exception if preferred
    }
}
