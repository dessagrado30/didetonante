const express = require('express');
const router = express.Router();
const sendercontroller = require('../controllers/senderscontrollers.js')
const db = require('../database/conection.js');


router.get('/', sendercontroller.consult)
router.post('/', sendercontroller.append);

router.route("/:id")
.put(sendercontroller.modify)
.delete(sendercontroller.delete);


module.exports = router;
