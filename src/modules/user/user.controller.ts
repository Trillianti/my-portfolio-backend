import { Request, Response } from 'express';
import * as userService from './user.service';

export const getUsers = async (_req: Request, res: Response) => {
    const users = await userService.getUsers();
    res.json(users);
};
