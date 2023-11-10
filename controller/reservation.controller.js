// const dbc = require("../config/db");
// const db = dbc.getDB();

// exports.getAllReservation = async (req, res) => {
//     const sqlGetReservation = `SELECT * FROM reservation ;`;
//     db.query(sqlGetReservation, (err, result) => {
//       if (err) {
//         res.status(404).json({ err });
//         throw err;
//       }

//       res.status(200).json(result);

//     });
//   };

//   exports.updateReservation = async (req, res) => {

//     const { id: idReservation } = req.params;

//     const { status } = req.body;
//     const anullation = "annulé"

//     const sqlUpdateReservation = `UPDATE reservation SET status = "${anullation}"
//      WHERE id = ${idReservation};`;
//     db.query(sqlUpdateReservation, (err, result) => {
//       //console.log(hashedPassword);
//       if (err) {
//         res.status(200).json({ err: "id non compatible" });
//       }
//       if (result) {
//         res.status(200).json({ message: "orditeur mise à jour" });
//       }
//     });
//   };

//   exports.createReservation= async (req, res) => {
//     //Recuperation du name,email et password de la requête avec la destructuration
//     const { numberOrdinateur,idUser} = req.body;

//     //Mot de passe Hashé

//     const db = dbc.getDB();
// console.log(numberOrdinateur,idUser);
//   const status = "active";
//           //On insert les valeurs du formulaire dans la table users
//           db.query(
//             "INSERT INTO reservation SET ?",
//             {

//              numberOrdinateur: numberOrdinateur,
//              idUser: idUser,
//              status:status

//             },
//             (err, result) => {
//               if (err) {
//                 console.log(err);
//               } else {
//                 res.status(201).json({
//                   message: "Ordinateur crée!",
//                   result: result.insertId,

//                 });
//               }
//             }
//           );
//         }
