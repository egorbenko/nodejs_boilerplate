var express = require('express');
var router = express.Router();

var userAction = require('../src/user/action/userAction');

/**
 *  User
 */
router.get('/api/v1/admin/users', userAction.getAll);
router.get('/api/v1/admin/user/:id', userAction.getOne);
router.post('/api/v1/admin/user/', userAction.create);
router.put('/api/v1/admin/user/:id', userAction.update);
router.delete('/api/v1/admin/user/:id', userAction.delete);

module.exports = router;
