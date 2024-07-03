import { pool } from '../db.js';

export class TodoModel {
    static async getAll() {
        const alltodos = await pool.query("SELECT * FROM todo");
        return alltodos;
    }

    static async getById(id) {
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        return todo.rows[0];
    }

    static async create(description) {
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *",
            [description]);
        return newTodo.rows[0];
    }

    static async delete(id){
        const todo = await this.getById(id);
        if(!todo){
            return false;
        }
        await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        return true;
    }

    static async update (id, description){
        const todo = await this.getById(id);
        if (!todo) {
            return false;
        }
        await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",
            [description, id]
        );
        return todo;
    }
}