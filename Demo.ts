import http from 'http'
import fs from 'fs'
import { routes } from './itemController';


const server =http.createServer(routes);

server.listen(3000);