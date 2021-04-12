import { Router } from "express";
import multer from "multer";
import uploadConfig from "./config/upload";
import ProdutoController from "./controllers/ProdutoController";
import UsuarioController from "./controllers/UsuarioController";

const routes = Router();
const upload = multer(uploadConfig);


export default routes;