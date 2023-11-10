const express = require("express");
const router= express.Router();

const reservationController = require("../controller/reservation.controller")


router.post("/createReservation",reservationController.createReservation);
router.get('/',reservationController.getAllReservation);
router.put('/updateReservation/:id',reservationController.updateReservation)
// router.delete('/deleteUser/:id',reservationController.deleteUser)



module.exports = router;