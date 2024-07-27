import { TodoModel } from "../models/todoModel.js";

export class TodoController {

    static async getAll(req, res) {
        try {
            const allTodos = await TodoModel.getAll();
            res.json(allTodos.rows);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async getById(req, res) {
        try {
            const { id } = req.params;
            const todo = await TodoModel.getById(id);
            if (todo) { return res.json(todo); }
            res.status(404).json({ messagge: "Todo not found" });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async create(req, res) {
        try {
            const { description } = req.body;
            const newTodo = await TodoModel.create(description);
            if (newTodo) { return res.status(201).json(newTodo); }
            res.status(400).json({ messagge: "Todo not created" });
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async delete(req, res) {
        try {
            const { id } = req.params;
            const todo = await TodoModel.delete(id);
            if(todo === false){
                return res.status(404).json({message: "Todo not found"});
            }
            res.status(200).json("Todo deleted");
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async update(req, res) {
        try {
            const { id } = req.params;
            const { description } = req.body;
            const newTodo = await TodoModel.update(id, description);
            if (newTodo === false) {
                return res.status(404).json({message: "Todo not found"});
            }
            res.status(200).json("Todo updated");
        } catch (error) {
            res.status(500).send(error.message);
        }
    }


}
