import { Router } from 'express';
import { createTodo, getAll, updateTodo } from '../controller/todo-controller';

const router = Router();

router.get('/todos', getAll);
router.post('/todos', createTodo);
router.put('/todos/:id', updateTodo);

export { router as todoRoutes };