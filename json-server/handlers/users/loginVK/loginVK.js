var VK = require('vksdk');
const consts = require('../../../config/consts');

const userLoginVK = async (req, res) => {
  const { id_token, user_id } = req.body;

  const accessToken = 'trueAccessToken';
  let userData;
  let vk;
  try {
    vk = new VK({
      'appId'     : consts.VK_CLIENT_ID,
      'appSecret' : consts.VK_CLIENT_SECRET,
    });
  } catch (e) {
    return res.status(401).send({ message: 'Invalid token provided.' });
  }

  vk.setToken(accessToken);

// Request 'users.get' method
  vk.request('users.get', {'user_id' : user_id}, function(data) {
    userData = data;
    console.log(data);
  });

  return res.status(200).send({
    status: 200,
    data: {
      accessToken: accessToken,
      refreshToken: 'trueRefreshToken',
      userInfo: {
        email: data.nickname,
        firstName: data.first_name,
        lastName: data.last_name,
        avatarUrl: data.id,
      },
    },
  });

};

module.exports = userLoginVK;