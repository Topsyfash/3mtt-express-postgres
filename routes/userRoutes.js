import express from "express"
import { handleCreateUser, handleDeleteUser, handleGetOneUser, handleGetUsers, handleUpdateUser } from "../controllers/userController.js";

const router = express.Router();

// Get all Users
router.get("/users", handleGetUsers);

// Get Specific User by Id
router.get("/users/:id", handleGetOneUser);

// Create A new user
router.post("/users", handleCreateUser);


// Update a user
router.put("/users/:id", handleUpdateUser);


// Delete a user 

router.delete("/users/:id", handleDeleteUser);



export default router