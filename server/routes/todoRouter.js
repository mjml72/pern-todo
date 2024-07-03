import express from 'express';
export const todoRouter = express.Router();
import { TodoController } from '../controllers/todocontroller.js';

todoRouter.post("/", TodoController.create);

todoRouter.get("/", TodoController.getAll);

todoRouter.get("/:id", TodoController.getById);

todoRouter.put("/:id", TodoController.update);

todoRouter.delete("/:id", TodoController.delete);
