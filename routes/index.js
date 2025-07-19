var express = require('express');
var router = express.Router();
var user = require('../controller/usercontroller');

router.post('/',user.index);
router.get('/',user.get_data);
router.get('/product',user.view_p);
router.post('/product',user.insert_p);



module.exports = router;
