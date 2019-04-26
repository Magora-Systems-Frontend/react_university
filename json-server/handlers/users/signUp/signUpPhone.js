const signUpPhone = async (req, res) => {
  const { phone = '', code = '' } = req.body;
  if(phone === '+7-913-444-88-55' && code === '1234') {
    return res.status(200).send({
      status: 200,
      data: {
        accessToken: 'trueAccessToken',
        refreshToken: 'trueRefreshToken',
      },
    });
  }

  return res.status(401).send({ message: 'Something went wrong' })
};

module.exports = signUpPhone;
