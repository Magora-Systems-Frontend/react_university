const userLogin = (req, res) => {

  return res.status(200).send({ accessToken: 'trueAccessToken' });

};

module.exports = userLogin;