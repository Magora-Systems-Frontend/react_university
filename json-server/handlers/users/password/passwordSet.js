const passwordSet = async (req, res) => {
  const { newPassword } = req.body;

  if(newPassword) {
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

module.exports = passwordSet;
