const express = require('express');

const router = express.Router();
const {auth} = require('../middleware/auth');
const {getLoggedInHomeScreen, registerContract, getPersonalDetailScreen, getContracts} = require('../controllers/contracts');


router.get('/', getContracts);
router.get('/loggedInHomeScreen', auth, getLoggedInHomeScreen);
router.get('/personalDetailScreen', auth, getPersonalDetailScreen);
router.post('/', registerContract);

module.exports = router;