const countries = require('../data').countries;

const getCountries = async (req, res) => {


  const ms = new Date().getTime() + 2000;
  while (new Date() < ms){}

  return res.status(200).send({
    status: 200,
    data: {
      countries,
    },
  });

};

module.exports = getCountries;
