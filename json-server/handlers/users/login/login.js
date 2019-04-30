const userLogin = async (req, res) => {
  const { email = '', password = '' } = req.body;

  if (email === 'test@email.com' && password === '123456') {
    return res.status(200).send({
      status: 200,
      data: {
        accessToken: 'trueAccessToken',
        refreshToken: 'trueRefreshToken',
        userInfo: {
          id: 'e36fdb10-6b38-11e9-a15c-c95eeb7cf1d5',
          email: 'test@email.com',
          firstName: 'Semen',
          lastName: 'Semenovich',
          avatarUrl: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80',
        },
      },
    });
  }

  return res.status(401).send({ message: 'Invalid email or password' });

};

module.exports = userLogin;
