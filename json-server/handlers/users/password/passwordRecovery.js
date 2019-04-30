const passwordRecovery = async (req, res) => {
  const { email = '' } = req.body;

    if(email === 'test@email.com') {
      return res.status(200).send({
        status: 200,
        data: {
        },
      });
    }

  return res.status(401).send({ message: 'Invalid email' });
};

module.exports = passwordRecovery;
