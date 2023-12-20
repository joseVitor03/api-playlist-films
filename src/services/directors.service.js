const { Director } = require('../models')

const findAll = async () => {
  const response = await Director.findAll();
  return { status: 200, data: response };
}

module.exports = {
  findAll,
}