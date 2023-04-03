const express = require("express");
const router = express.Router();
const Memory = require("../model/Memory");
const memoriesController = require("../controllers/memories-controller");

router.get("/", memoriesController.getAllMemories);
router.post("/", memoriesController.addMemory);
router.get("/:id", memoriesController.getById);
router.put("/:id", memoriesController.updateMemory);
router.delete("/:id", memoriesController.deleteMemory);

module.exports = router;
