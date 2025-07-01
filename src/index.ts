import express from 'express';

import userRoutes from './modules/user/user.routes';

const app = express();
app.use(express.json());

const port = 3000;

app.get('/', (_req, res) => {
    res.send('Hello from Express + TypeScript!');
});

app.use('api/users', userRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
