const { OAuth2Client } = require('google-auth-library');
const consts = require('../../../config/consts');

const userLoginGoogle = async (req, res) => {
  const { id_token } = req.body;

  const client = new OAuth2Client(consts.GOOGLE_CLIENT_ID);

  let ticket;
  try {
    ticket = await client.verifyIdToken({
      idToken: id_token,
      audience: consts.GOOGLE_CLIENT_ID,
    });
  } catch (e) {
    return res.status(401).send({ message: 'Invalid token provided.' });
  }

  const payload = ticket.getPayload();
  const userId = payload['sub'];

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
        email: payload.email,
        firstName: payload.given_name,
        lastName: payload.family_name,
        avatarUrl: payload.picture,
      },
    },
  });

};

module.exports = userLoginGoogle;