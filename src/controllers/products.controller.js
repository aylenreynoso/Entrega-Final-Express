// controller
import {
  getAllProductsService,
  getProductByIdService,
  createProductService,
  deleteProductService,
} from "../services/products.service.js";

const getAllProducts = async (req, res) => {
  try {
    const products = await getAllProductsService();
    res.status(200).json({ message: "List of products", data: products });
  } catch (error) {
    res.status(500).json({ message: "Internal Error", error: error.message });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await getProductByIdService(id);
    if (product) {
      res
        .status(200)
        .json({ message: `Product details for ID: ${id}`, data: product });
    } else {
      res.status(404).json({ message: `Product with ID: ${id} not found` });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Error", error: error.message });
  }
};

const createProduct = async (req, res) => {
  const productData = req.body;
  try {
    const newProduct = await createProductService(productData);
    res
      .status(201)
      .json({ message: "Product created successfully", data: newProduct });
  } catch (error) {
    res.status(500).json({ message: "Internal Error", error: error.message });
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await deleteProductService(id);
    res.status(200).json({ message: result.message });
  } catch (error) {
    res.status(500).json({ message: "Internal Error", error: error.message });
  }
};

export { getAllProducts, getProductById, createProduct, deleteProduct };
