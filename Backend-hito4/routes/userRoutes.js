import { Router } from "express";
import { userController } from "../controllers/user.controller.js";

const router = Router();

router.get("/", userController.readUsers); // Para obtener todos los usuarios
router.get("/:id", userController.readUserById); // Para obtener un usuario por ID
router.get("/email/:email", userController.readUserByEmail); // Para obtener un usuario por email

export default router;
