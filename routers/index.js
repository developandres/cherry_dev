const express = require('express');
const router = express.Router();
//Define la rutas del usuario
const userRoute = require('./users/user_router');
const providerRoute = require('./providers/providers_route')

//Lista de rutas padres
const routersList =[
    {
        path:'/users',
        route: userRoute
    },
    {
        path:'/providers',
        route:providerRoute
    }
];

//
routersList.forEach((route) =>{
    router.use(route.path, route.route)
});

module.exports = router;