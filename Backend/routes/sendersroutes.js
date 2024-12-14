const express = require('express');
const router = express.Router();
const sendercontroller = require('../controllers/senderscontrollers.js')


router.post('/', sendercontroller.append);
router.put('/', sendercontroller.modify)

router.route("/:id")
.get(sendercontroller.consult)
.delete(sendercontroller.delete);


module.exports = router;
