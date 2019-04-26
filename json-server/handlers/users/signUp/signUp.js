const signUp = async (req, res) => {
  const { email = '', password = '', confirmPassword = '' } = req.body;

  if(email === 'test@email.com' && password === 'aS123456' && confirmPassword === 'aS123456') {
    return res.status(200).send({
      status: 200,
      data: {
        accessToken: 'trueAccessToken',
        refreshToken: 'trueRefreshToken',
      },
    });
  }

  return res.status(401).send({ message: 'Something went wrong' });

};

module.exports = signUp;
