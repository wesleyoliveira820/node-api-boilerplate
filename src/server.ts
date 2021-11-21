import 'dotenv/config';
import { App } from './app';
import { logger } from './utils/logger';

const server = new App();
const appPort = process.env.APP_PORT;

server.app.listen(appPort, () => {
  logger.info(`server.operation:running on port ${appPort}`);
});
