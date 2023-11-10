const dbc = require("../config/db");
const db = dbc.getDB();

exports.getAllUser = async (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    //on enlève le mdp du resultat

    res.status(200).json(result);
  });
};
exports.getAll = async (req, res) => {
  db.query("SELECT * FROM users", (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    //on enlève le mdp du resultat

    res.status(200).json(result);
  });
};

exports.getOneUser = async (req, res) => {
  const { idOfUSER } = req.params;

  const sql = `SELECT * FROM users u WHERE u.id = ${idOfUSER};`;
  db.query(sql, (err, result) => {
    if (err) {
      res.status(404).json({ err });
    } else {
      res.status(200).json(result);
    }
  });
};

exports.getRequest = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  const sqlGetUser = `SELECT requests.*, users.name
  FROM requests
  INNER JOIN users ON requests.id_userTwo = users.id
  WHERE requests.id_userOne = ${id} AND requests.state = 'attente'`;

  db.query(sqlGetUser, (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    //on enlève le mdp du resultat

    res.status(200).json(result);
  });
};
exports.getFriends = async (req, res) => {
  const { id } = req.params;
  console.log(id);

  const sqlGetUser = `SELECT friends.*, users.name
  FROM friends
  INNER JOIN users ON friends.id_userTwo = users.id
  WHERE friends.id_userOne = ${id}`;

  db.query(sqlGetUser, (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    //on enlève le mdp du resultat

    res.status(200).json(result);
  });
};

exports.acceptRequest = async (req, res) => {
  const { userId1, userId2 } = req.body;

  const sqlInsertFriend =
    "INSERT INTO friends (id_userOne, id_userTwo) VALUES (?, ?)";

  db.query(sqlInsertFriend, [userId1, userId2], (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    // Supprimez le mot de passe du résultat si nécessaire
    // delete result[0].user_password;

    res.status(200).json(result);
  });
};
exports.makeRequest = async (req, res) => {
  const { userId1, userId2 } = req.body;

  const sqlInsertFriend =
    "INSERT INTO requests (id_userOne, id_userTwo,state) VALUES (?, ?,'attente')";

  db.query(sqlInsertFriend, [userId1, userId2], (err, result) => {
    if (err) {
      res.status(404).json({ err });
      throw err;
    }
    // Supprimez le mot de passe du résultat si nécessaire
    // delete result[0].user_password;

    res.status(200).json(result);
  });
};

exports.signup = async (req, res) => {
  //Recuperation du name,email et password de la requête avec la destructuration
  const { name, email, password } = req.body;

  //Mot de passe Hashé

  const db = dbc.getDB();

  db.query(
    "SELECT email from users where email = ?",
    [email],
    (err, results) => {
      // si results est plus grand que 0  il y a déja l'email dans la database
      if (results.length > 0) {
        return res.status(200).json({ errorMessage: "Déja enregistré" });
      } else {
        //On insert les valeurs du formulaire dans la table users
        db.query(
          "INSERT INTO users SET ?",
          {
            name: name,
            password: password,
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

//LOGIN
exports.login = async (req, res) => {
  const db = dbc.getDB();
  try {
    const email = req.body.email;
    const password = req.body.password;

    db.query(
      `SELECT * FROM users WHERE email=?`,
      [email],

      async (err, result) => {
        if (err) return res.status(404).json({ err });
        /*Si la longueur du tableau est egale a 0 ca veut dire qu'il y a pas de mail trouvé*/
        console.log(result);
        if (result.length === 0) {
          return res
            .status(200)
            .json({ errorMail: "Email ou Mot de passe inconnue" });
        } else {
          res.status(200).json({
            user: result[0],
            // token: jwt.sign({ userId: id }, process.env.TOKEN_SECRET, {
            //   expiresIn: "24h",
            // }),
          });
        }
      }
    );
  } catch {
    console.log(err);
    return res.status(400).json({ err });
  }
};
