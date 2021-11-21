import { Application, Router,  } from 'express';

const route = Router();

route.get('/', (request, response) => {
  response.status(200).json({ server_status: 'running' });
});

export const routes = (app: Application) => app.use('/api', route)
