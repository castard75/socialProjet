// const dbc = require("../config/db");
// const db = dbc.getDB();

// exports.getAllOrdi = async (req, res) => {
//     const sqlGetUser = `SELECT * FROM ordinateur ;`;
//     db.query(sqlGetUser, (err, result) => {
//       if (err) {
//         res.status(404).json({ err });
//         throw err;
//       }
//       //on enlève le mdp du resultat
//       delete result[0].user_password;
//       res.status(200).json(result);

//     });
//   };

//   exports.updateOrdi = async (req, res) => {

//     const { id: ordiId } = req.params;

//     const { number } = req.body;

//     const sqlUpdateUser = `UPDATE ordinateur SET number = "${number}"
//      WHERE id = ${ordiId};`;
//     db.query(sqlUpdateUser, (err, result) => {
//       //console.log(hashedPassword);
//       if (err) {
//         res.status(200).json({ err: "id non compatible" });
//       }
//       if (result) {
//         res.status(200).json({ message: "orditeur mise à jour" });
//       }
//     });
//   };

//   exports.deleteOrdi = (req, res, next) => {
//     const { id: ordiId} = req.params;

//           db.query(
//             "DELETE FROM ordinateur WHERE ordinateur.id= ?",
//             [ordiId],
//             (err, result) => {
//               if (err) {
//                 res.status(404).json({ err });
//                 throw err;
//               }
//               res.status(200).json(result);
//             }
//           );

//       }

//   exports.createOrdi = async (req, res) => {
//     //Recuperation du name,email et password de la requête avec la destructuration
//     const { number,marque} = req.body;

//     //Mot de passe Hashé

//     const db = dbc.getDB();

//           //On insert les valeurs du formulaire dans la table users
//           db.query(
//             "INSERT INTO ordinateur SET ?",
//             {

//              number: number,
//              marque: marque,

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
