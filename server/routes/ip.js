const express = require('express');
const router = express.Router();
const IpController = require('../controller/ip')

router.post('/', IpController.getNetworkByIpAddress);
module.exports = router;