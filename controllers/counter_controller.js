var BaseDeDatos = require("../dao/BaseDeDatos.js");

let baseDeDatos = new BaseDeDatos();

const increment_count = async (req, res, next) => {
  try {
    const count = await baseDeDatos.increment_count()
    res.send(count);
  } catch (error) {
    res.status(500).send(error);
  }
}

const decrement_count = async (req, res, next) => {
  try {
    const count = await baseDeDatos.decrement_count()
    res.send(count);
  } catch (error) {
    res.status(500).send(error);
  }
}

module.exports = {
  increment_count,
  decrement_count
};
