import express from "express";
import { createRole, getAllRoles, updateRole, deleteRole } from "../controllers/role.controller.js";

const router =express.Router();

// Create a New role in DB
router.post('/Create', createRole);

// Update role in DB
router.put('/update/:id', updateRole);

// get all the roles from DB
router.get('/getAll',getAllRoles);

//Delete the role in DB
router.delete("/deleteRole/:id", deleteRole);

export default router; 