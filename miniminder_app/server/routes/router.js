const express = require('express');
const route = express.Router();


const services = require('../services/render');
const staffcontroller = require('../controller/staff_controller');


// home route - landing page
route.get('/', services.homeRoutes);

// admin staff route 
route.get('/admin-staff', services.admin_staff);

// add staff route
route.get('/add-staff', services.add_staff);
route.post('/add-staff', staffcontroller.create);


// update staff route 
route.get('/update-staff', services.update_staff);

route.get('/admin-child', services.admin_child);

route.get('/account-type', services.account_type);

route.get('/login-page', services.login_page);




route.get('/update-staff', services.update_staff);

route.get('/add-child', services.add_child);

route.get('/update-child', services.update_child);



// // make a comment on a post //
// route.get('/postcomment', function (req, res) {
//     res.send("Posts - Comment Page");
//     console.log("Comment Page Loaded")
// });

// // page - admin dashboard //
// route.get('/admin', function (req, res) {
//     res.send("Admin Page");
//     console.log("Admin Page Only Loaded")
// });

// // page - parents dashboard //
// route.get('/parents', function (req, res) {
//     res.send("Parents Page");
//     console.log("Parents Only Loaded")
// });

// // admin privilege //
// // page - admin post //
// route.get('/createpost', function (req, res) {
//     res.send("Create Post - Admins Only");
//     console.log("Create Post Page Loaded")
// });



// // API
route.post('/staffs', staffcontroller.create);
route.get('/staffs', staffcontroller.find);
route.get('/staffs', staffcontroller.show);
route.get('/admin-staff', staffcontroller.admin_staff);
route.put('staffs/:id', staffcontroller.update);
route.delete('staffs/:id', staffcontroller.deleteStaff);


module.exports = route;