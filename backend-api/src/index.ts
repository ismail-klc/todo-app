import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import 'express-async-errors';
import { Request, Response } from "express";
import { NotFoundError } from "./errors/not-found-error";
import { errorHandler } from "./middlewares/error-handler";
import { todoRoutes } from "./routes/todo-routes";

createConnection().then(async connection => {
    await connection.synchronize();

    // create express app
    const app = express();
    app.use(express.json());

    // route mapping
    app.use('/api', todoRoutes);

    // this is gonna catch unmatched routes and return not found error
    app.all('*', async (req: Request, res: Response) => {
        throw new NotFoundError("Route not found");
    });

    // this is gonna catch errors and handle them
    app.use(errorHandler);

    // start express server
    app.listen(3000, () => console.log("Listening on port 3000"));
})


