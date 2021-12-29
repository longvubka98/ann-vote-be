const express = require('express');
const authRoute = require('./auth.routes');
const departmentRoute = require('./department.routes');
const router = express.Router();

const defaultRoutes = [
    {
        path: '/auth',
        route: authRoute,
    },
    {
        path: '/department',
        route: departmentRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;