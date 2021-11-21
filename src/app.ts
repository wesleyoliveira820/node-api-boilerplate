import 'dotenv/config';
import express from 'express';
import { routes } from './routes';
import helmet from 'helmet';
import cors from 'cors';

class App {
  public readonly app;

  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  private middlewares() {
    this.app.use(cors({
      origin: process.env.NODE_ENV === 'development' ? '*' : process.env.FRONT_URL,
    }));

    this.app.use(helmet());
  }

  private routes() {
    routes(this.app);
  }
}

export { App };
