// services
import {
  getAllProducts,
  getProductById,
  createProduct,
  deleteProduct,
} from "../models/products.model.js";

const getAllProductsService = async () => {
  return await getAllProducts();
};

const getProductByIdService = async (id) => {
  return await getProductById(id);
};

const createProductService = async (product) => {
  return await createProduct(product);
};

const deleteProductService = async (id) => {
  return await deleteProduct(id);
};

export {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  deleteProductService,
};
