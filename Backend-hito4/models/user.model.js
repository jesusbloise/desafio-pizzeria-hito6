import { readFile } from "node:fs/promises";

const getUsers = async () => {
  const data = await readFile("db/users.json", "utf-8");
  return JSON.parse(data);
};

const getUserById = async (id) => {
  const users = await getUsers();
  return users.find((user) => user.id === id);
};

const getUserByEmail = async (email) => {
  const users = await getUsers();
  return users.find((user) => user.email === email);
};

export const userModel = {
  getUsers,
  getUserById,
  getUserByEmail,
};
