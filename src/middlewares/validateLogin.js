
const regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const validateLogin = (req, res, next) => {
  const { email, password } = req.body;
  if (!regexEmail.test(email) || password.length < 8) {
    return res.status(400).json({ message: 'email ou senha em formato inválido'});
  }
  next();
}

module.exports = { validateLogin };