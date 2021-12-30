const express = require('express');
const authRoute = require('./auth.routes');
const departmentRoute = require('./department.routes');
const awardRoute = require('./award.routes');
const candidatesRoute = require('./candidates.routes');
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
    {
        path: '/award',
        route: awardRoute,
    },
    {
        path: '/candidates',
        route: candidatesRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

module.exports = router;