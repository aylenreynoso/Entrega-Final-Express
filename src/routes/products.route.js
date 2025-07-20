import { Router } from "express";
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

const router = Router();

//devuelve todos los productos
router.get("/", getAllProducts);

//devuelve un producto por id
router.get("/:id", getProductById);

//recibe en el cuerpo (body) de la petición la información sobre el nuevo producto para ser guardado en el servicio de datos en la nube
router.post("/create", createProduct);

//elimina un producto por id
router.delete("/:id", deleteProduct);

export default router;
