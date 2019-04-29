const fetch = require('node-fetch');

const userLoginGoogle = async (req, res) => {
  const { accessToken, ...body } = req.body;

  // access token and userID should be verified

  const url = `https://graph.facebook.com/me?fields=id&access_token=${accessToken}`;
  let responseObject;
  try {
    const response = await fetch(url, { method: 'get' });
    const textResponse = await response.text();
    responseObject = JSON.parse(textResponse);
  } catch (error) {
    return res.status(503).send({ message: 'Service is not available.' });
  }

  if (responseObject.error) {
    return res.status(401).send({ message: 'Invalid token provided.' });
  }

  const { id: userId } = responseObject;

  /*
  * Check userId in DataBase and create user if user doesn't exist
  * */

  // login user

  return res.status(200).send({
    status: 200,
    data: {
      accessToken: 'trueAccessToken',
      refreshToken: 'trueRefreshToken',
      userInfo: {
        email: body.email,
        firstName: body.firstName,
        lastName: body.lastName,
        avatarUrl: body.avatarUrl,
      },
    },
  });

};

module.exports = userLoginGoogle;
