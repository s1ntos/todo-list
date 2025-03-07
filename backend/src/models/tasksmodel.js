const connection = require('./connection'); // Caminho correto!

const getAll = async () => {
  const [tasks] = await connection.execute('SELECT * FROM tasks'); // Ajustei destructuring
  return tasks;
};

module.exports = {
  getAll,
};
