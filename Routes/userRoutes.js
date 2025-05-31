import express from "express"
import { handleCreateUser, handleDeleteUser, handleGetOneUser, handleGetUsers, handleUpdateUser } from "../controllers/userController.js";

const router = express.Router();

// Get all Users
router.get("/", handleGetUsers);

// Get Specific User by Id
router.get("/:id", handleGetOneUser);

// Create A new user
router.post("/", handleCreateUser);


// Update a user
router.put("/:id", handleUpdateUser);


// Delete a user 

router.delete("/:id", handleDeleteUser);

export default router