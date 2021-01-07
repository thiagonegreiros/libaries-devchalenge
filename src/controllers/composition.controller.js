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

//* ==> Metodo responsavel por selecionar todos os dados da tabela 'Composition'
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

//* ==> Método responsável por atualizar um 'Composition' pelo 'Id':
exports.updateCompositionById = async (req, res) => {
  const compositiontId = parseInt(req.params.id);
  const { title, publishing, photo, author } = req.body;

  const response = await db.query(
    "UPDATE libaries.composition SET title = $1, publishing = $2, photo = $3 , author = $4 WHERE id = $5",
    [title, publishing, photo, author, compositiontId]
  );

  res.status(200).send({ message: "Composition Updated Successfully!" });
};

//* ==> Metodo responsavel por Deletar uma 'Composition' pelo 'Id':
exports.deleteCompositionById = async (req, res) => {
  const compositionId = parseInt(req.params.id);

  const response = await db.query(
    "DELETE FROM libaries.composition WHERE id = $1",
    [compositionId]
  );

  res.status(200).send({message: "Composition deleted Successfully!"});
} 