import { userModel } from "../models/user.model.js";

// Obtener todos los usuarios
const readUsers = async (req, res) => {
  const users = await userModel.getUsers();
  res.json(users);
};

// Obtener un usuario por ID
const readUserById = async (req, res) => {
  const { id } = req.params;
  const user = await userModel.getUserById(id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
};

// Obtener un usuario por email (para validaciones, login, etc.)
const readUserByEmail = async (req, res) => {
  const { email } = req.params;
  const user = await userModel.getUserByEmail(email);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.json(user);
};

export const userController = {
  readUsers,
  readUserById,
  readUserByEmail,
};
