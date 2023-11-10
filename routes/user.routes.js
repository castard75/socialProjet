const express = require("express");
const router = express.Router();

const usersController = require("../controller/user.controller");

router.post("/signup", usersController.signup);
router.post("/login", usersController.login);
router.get("/:id", usersController.getOneUser);
router.get("/requests/:id", usersController.getRequest);
router.get("/", usersController.getAll);
router.get("/getFriends/:id", usersController.getFriends);
router.post("/addFriends", usersController.acceptRequest);
router.post("/makeRequest", usersController.makeRequest);

module.exports = router;
