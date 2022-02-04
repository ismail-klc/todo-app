import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { Todo } from "../entity/todo";
import { NotFoundError } from "../errors/not-found-error";

export const getAll = async (request: Request, response: Response) => {
    const todoRepository = getRepository(Todo);
    const todos = await todoRepository.find();
    return response.json(todos);
}

export const createTodo = async (request: Request, response: Response) => {
    const todoRepository = getRepository(Todo);
    const data = request.body;

    const todo = await todoRepository.save({
        ...data
    });

    return response.json(todo);
}

export const updateTodo = async (request: Request, response: Response) => {
    const todoRepository = getRepository(Todo);
    const data = request.body;
    const id = request.params.id;

    const todo = await todoRepository.findOne(id);
    if(!todo) {
        throw new NotFoundError("Todo not found");
    }

    await todoRepository.update(id, {
        ...data
    });

    return response.json({ msg: "success" });
}