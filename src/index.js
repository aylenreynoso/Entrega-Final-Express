import express from "express";
import cors from "cors";
import { join, __dirname } from "./utils/index.js";
import productRoutes from "./routes/products.route.js";
import authRoutes from "./routes/auth.route.js";

//TODO: Auth

//settings
const app = express();
app.set("PORT", 3000);

// middlewares
app.use(express.json());
app.use(express.static(join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//routes
app.get("/", (req, res) => {
  res.json({ title: "Home Page" });
});

//API routes
app.use("/api/products", productRoutes);
app.use("/api/auth", authRoutes);

//Middleware for 404
app.use((req, res, next) => {
  res.status(404).send("Ruta invalida");
});

//listeners
app.listen(app.get("PORT"), () => {
  console.log(`Server on port http://localhost:${app.get("PORT")}`);
});
