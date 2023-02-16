const express = require('express');
const router = express.Router();
const  { isLoggedIn} = require('../middlewares/isLoggedIn');
const  { checkRoleAuth }= require('../middlewares/roleAuth');
const  { redirectioner } = require('../middlewares/redirecter');
const adminController = require('../controllers/adminController');
const {cacheInit} = require('../middlewares/cache');

router.get('/',  isLoggedIn, checkRoleAuth(['admin']), (req, res) =>{ return res.redirect('/admin/home')});
router.get('/home',  isLoggedIn, checkRoleAuth(['admin']), cacheInit,adminController.adminHomeView);
router.get('/tables', isLoggedIn,  checkRoleAuth(['admin']), cacheInit ,adminController.adminTablesView);
router.get('/users', isLoggedIn, checkRoleAuth(['admin']),  cacheInit,adminController.adminUsersView);
router.get('/testing', isLoggedIn, checkRoleAuth(['admin']), cacheInit, adminController.adminTestingView);
router.get('/loadingTestView', isLoggedIn, checkRoleAuth(['admin']), adminController.loadingAdminTestView)

router.get('/login', adminController.loginAdminView);
router.get('/register', adminController.registerAdminView);




module.exports = router; 