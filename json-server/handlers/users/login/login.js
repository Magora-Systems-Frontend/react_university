const userLogin = (req, res) => {
  const { email = '', password = '' } = req.body;

  if (email === 'test@email.com' && password === '123456') {
    return res.status(200).send({ accessToken: 'trueAccessToken', refreshToken: 'trueRefreshToken' });
  }

  return res.status(401).send({ message: 'Invalid email or password' });

};

module.exports = userLogin;