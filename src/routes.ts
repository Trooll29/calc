import { Router } from "express";
import * as HomeController from "./controller/home.controller"

const route = Router();

route.get('/', HomeController.home)



export default route;