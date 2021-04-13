import { Router } from "express";
// import multer from "multer";
import uploadConfig from "./config/upload";
import ProdutoController from "./controllers/ProdutoController";
import UsuarioController from "./controllers/UsuarioController";''

const routes = Router();
// const upload = multer(uploadConfig);

routes.get('/produtos', ProdutoController.index)
routes.get('/produtos/:id', ProdutoController.show)
routes.post('/produtos', ProdutoController.create);
routes.get('/usuarios', UsuarioController.index)
routes.get('/usuarios/:id', UsuarioController.show)
routes.post('/usuarios', UsuarioController.create);
// routes.post('/orphanages', upload.array('images'), OrphanagesController.create);

export default routes;