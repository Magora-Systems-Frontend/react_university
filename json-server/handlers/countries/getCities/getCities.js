const cities = require('../data').cities;

const getCities = async (req, res) => {

  const ms = new Date().getTime() + 2000;
  while (new Date() < ms){}

  const { query = {} } = req;
  const { country = '' } = query;

  return res.status(200).send({
    status: 200,
    data: {
      cities: cities[country] || [],
    },
  });

};

module.exports = getCities;
