import express from "express";
import MainRoutes from "./routes";
import mustache from "mustache-express";
import path from "path";

const server = express();

server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, '../views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')))
server.use(express.urlencoded({extended:true}));

server.use(MainRoutes)

server.listen(80)


