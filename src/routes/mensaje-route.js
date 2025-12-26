const express = require("express");
const router = express.Router();
const { getAllMessages, getMessageById, postMessage } = require("../controllers/mensaje-controller");

router.get("/", getAllMessages);
router.get("/:id", getMessageById);
router.post("/", postMessage);

module.exports = router;