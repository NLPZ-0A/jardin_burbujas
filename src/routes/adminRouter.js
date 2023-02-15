const express = require('express');
const router = express.Router();
const  { isLoggedIn} = require('../middlewares/isLoggedIn');
const  { checkRoleAuth }= require('../middlewares/roleAuth');
const adminController = require('../controllers/adminController');

router.get('/',  isLoggedIn, checkRoleAuth(['admin']), (req, res) =>{ return res.redirect('/admin/home')});
router.get('/home',  isLoggedIn, checkRoleAuth(['admin']), adminController.adminHomeView);
router.get('/tables', isLoggedIn,  checkRoleAuth(['admin']), adminController.adminTablesView);
router.get('/users', isLoggedIn, checkRoleAuth(['admin']), adminController.adminUsersView);
router.get('/testing', isLoggedIn, checkRoleAuth(['admin']), adminController.adminTestingView);
router.get('/loadingTestView', isLoggedIn, checkRoleAuth(['admin']), adminController.loadingAdminTestView)

router.get('/login', adminController.loginAdminView);
router.get('/register',  isLoggedIn, checkRoleAuth(['admin']), adminController.registerAdminView);



module.exports = router; 