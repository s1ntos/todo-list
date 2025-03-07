const tasksModel = require('backend\src\models\tasksmodel.js');

const getAll = async (req, res) => {
  return response.status(200).json({ message: 'controller funcionando'})
};

module.exports = {
  getAll
};
