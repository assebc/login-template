import { Router } from "express";
import AuthenticationController from "./controllers/AuthenticationController.js";
import UserController from "./controllers/UserController.js";

const routes = Router();

routes.get("", (_,res) => {
  return res.send("working");
});

routes.post("/", AuthenticationController.login);
routes.post("/register", UserController.register);
routes.put("/forgot-password", UserController.forgot_password);


export { routes };