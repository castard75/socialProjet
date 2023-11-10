const dbc = require("../config/db");
const db = dbc.getDB();

exports.getAllUsers = async (req, res) => {
  const sqlGetUser = `SELECT * FROM users ;`;
  db.query(sqlGetUser, (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    //on enlève le mdp du resultat
    delete result[0].user_password;
    res.status(200).json(result);
  });
};

exports.updateOneUser = async (req, res) => {
  const { id: userId } = req.params;

  const { email } = req.body;

  const sqlUpdateUser = `UPDATE user SET email = "${email}"
     WHERE id = ${userId};`;
  db.query(sqlUpdateUser, (err, result) => {
    //console.log(hashedPassword);
    if (err) {
      res.status(200).json({ err: "id non compatible" });
    }
    if (result) {
      res.status(200).json({ message: "Profil mise à jour" });
    }
  });
};

exports.deleteUser = (req, res, next) => {
  const { id: userId } = req.params;

  db.query("DELETE FROM user WHERE user.id= ?", [userId], (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    res.status(200).json(result);
  });
};

exports.signup = async (req, res) => {
  //Recuperation du name,email et password de la requête avec la destructuration
  const { nom, email } = req.body;

  //Mot de passe Hashé

  const db = dbc.getDB();
  const roleUser = "2";
  db.query(
    "SELECT email from user where email = ?",
    [email],
    (err, results) => {
      // si results est plus grand que 0  il y a déja l'email dans la database
      if (results.length > 0) {
        return res.status(200).json({ errorMessage: "Déja enregistré" });
      } else {
        //On insert les valeurs du formulaire dans la table users
        db.query(
          "INSERT INTO user SET ?",
          {
            nom: nom,
            role: roleUser,
            email: email,
          },
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.status(201).json({
                message: "client crée!",
                result: result.insertId,
              });
            }
          }
        );
      }
    }
  );
};
