const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userContollers'); // استيراد الدوال من userControllers

// استخدام الدوال من userControllers
router.get('/', userControllers.getHomePage);
router.get('/user/add.html', userControllers.getAddUserPage);
router.get('/edit/:id', userControllers.getEditUserPage);
router.get('/view/:id', userControllers.getViewUserPage);
router.post('/user/add.html', userControllers.addUser);
router.post('/search', userControllers.searchUser);
router.delete('/edit/:id', userControllers.deleteUser);
router.put('/edit/:id', userControllers.updateUser);

module.exports = router;