const Contacts = require("../models/Contact");
const User = require("../models/User");

//-------- views----------------------

//------------------charge-server-test--------------

const loadingAdminTestView = (req, res) => {
    res.render('homeM')
};

const loginAdminView = (req, res) => {
    //res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate'); // HTTP 1.1.
    //res.setHeader('Pragma', 'no-cache'); // HTTP 1.0.
    // res.setHeader('Expires', '0'); // Proxies.
    res.render('login',{layout : false})
    return;
};

const registerAdminView = (req, res) => {
    res.render('register',{layout : false})
};

const adminUsersView = async(req, res) => {
    const user = req.user;
    const users = await User.findAll();
    res.render('users', { users:users, user : user })
};

const adminHomeView = (req, res) =>{
    const user = req.user;
    res.render('home', {user:user});
};

const adminTestingView = (req, res) =>{
    const user = req.user;
    res.render('testing',{user:user});
};

const adminTablesView = async(req, res) =>{
   const user = req.user;
   const contacts = await Contacts.findAll()
                                    //.then(response => {return response})
                                    //.catch(err => console.log(err))
    res.render('tables', {contacts : contacts,  user : user});
};



module.exports = { adminHomeView, adminTablesView, loginAdminView,  registerAdminView, adminUsersView, adminTestingView, loadingAdminTestView }