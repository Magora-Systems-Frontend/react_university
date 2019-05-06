const { OAuth2Client } = require('google-auth-library');
const fetch = require('node-fetch');
const uuid = require('uuid/v1');
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

  let userInfo = null;

  // get all users
  const getUsersResponse = await fetch(`${consts.API_DOMAIN}/api/users`, { method: 'get' });
  const textResponse = await getUsersResponse.text();
  const users = JSON.parse(textResponse);
  (users || []).forEach((user) => {
    if (user.googleUserId !== userId) return;
    userInfo = user;
  });

  if (userInfo) {
    delete userInfo.googleUserId;
    return res.status(200).send({
      status: 200,
      data: {
        accessToken: 'trueAccessToken',
        refreshToken: 'trueRefreshToken',
        userInfo,
      },
    });
  }

  userInfo = {
    id: uuid(),
    email: payload.email,
    firstName: payload.given_name,
    lastName: payload.family_name,
    avatarUrl: payload.picture,
    googleUserId: userId,
  };
  /*
  * The commented code below can add user to the db.json
  * */
  // const headers = {
  //   Accept: 'application/json',
  //   'Content-Type': 'application/json',
  // };
  // const stringifiedUser = JSON.stringify(userInfo);
  // await fetch(`${consts.API_DOMAIN}/api/users`, { method: 'post', body: stringifiedUser, headers });
  delete userInfo.googleUserId;

  return res.status(200).send({
    status: 200,
    data: {
      accessToken: 'trueAccessToken',
      refreshToken: 'trueRefreshToken',
      userInfo,
    },
  });
};

module.exports = userLoginGoogle;
