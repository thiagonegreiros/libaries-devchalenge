const db = require("../config/database");

// ==> Método responsável por criar um novo 'Composition':

exports.createComposition = async (req, res) => {
  const { title, publishing, photo, author} = req.body;
  const { rows } = await db.query(
    "INSERT INTO libaries.composition (title, publishing, photo, author) VALUES ($1, $2, $3, $4)",
    [title, publishing, photo, author]
  );

  res.status(201).send({
    message: "Composition added successfully!",
    body: {
      composition: { title, publishing, photo, author }
    },
  });
};

exports.listAllComposition = async (req, res) => {
    const response = await db.query('SELECT title, publishing, photo, author FROM libaries.composition ORDER BY title ASC');
    res.status(200).send(response.rows);
};

//* ==> Método responsável por selecionar 'Composition' pelo 'Id':
exports.findCompositionById = async (req, res) => {
    const compositionId = parseInt(req.params.id);
    const response = await db.query('SELECT * FROM libaries.composition WHERE id = $1', [compositionId]);
    res.status(200).send(response.rows);
}