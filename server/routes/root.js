const { reqHomePage } = require('./home-page');
const { ROUTES } = require('../../src/config/constants');
const router = require('express').Router();

router.get(`${ROUTES.HOME_PAGE}`, reqHomePage);

module.exports = router;
