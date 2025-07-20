// model
import { db } from "../config/db.js"; // Import the Firestore database instance

import {
  collection,
  getDocs,
  doc,
  getDoc,
  addDoc,
  deleteDoc,
} from "firebase/firestore";

const productsCollection = collection(db, "products");

async function getAllProducts() {
  try {
    const snapshot = await getDocs(productsCollection);
    const products = [];
    snapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    return products;
  } catch (error) {
    console.error("Error getting all products:", error);
    throw new Error("Error getting all products");
  }
}

async function getProductById(id) {
  const productDoc = doc(db, "products", id);
  const snapshot = await getDoc(productDoc);
  if (snapshot.exists()) {
    return snapshot.data();
  } else {
    return null;
  }
}

async function createProduct(product) {
  try {
    const newProduct = await addDoc(productsCollection, product);
    return newProduct;
  } catch (error) {
    console.error("Error creating product:", error);
    throw new Error("Error creating product");
  }
}

async function deleteProduct(id) {
  try {
    const productDoc = doc(db, "products", id);
    await deleteDoc(productDoc);
    return { message: `Product with ID: ${id} deleted` };
  } catch (error) {
    console.error("Error deleting product:", error);
    throw new Error("Error deleting product");
  }
}

export { getAllProducts, getProductById, createProduct, deleteProduct };
