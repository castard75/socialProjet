const express = require("express");
const router= express.Router();

const ordinateurController = require("../controller/ordinateur.controller")


router.post("/createOrdi",ordinateurController.createOrdi);
router.get('/',ordinateurController.getAllOrdi);
router.put('/ordiUpdate/:id',ordinateurController.updateOrdi)
router.delete('/deleteOrdi/:id',ordinateurController.deleteOrdi)



module.exports = router;