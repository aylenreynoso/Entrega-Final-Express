import { Router } from "express";
// import userController from '../controllers/auth.controller.js'

const router = Router();

router.post("/auth/login", (req, res) => {
  const { email, password } = req.body;
  // Aquí iría la lógica de autenticación
  res.json({ message: "Login successful", user: { email } });
});

export default router;
