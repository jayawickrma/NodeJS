import http from 'http';
import { routes } from './itemController.js';
const server = http.createServer(routes);
server.listen(3000);
