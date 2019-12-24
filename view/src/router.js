import React, { Component } from 'react';
import Students from './Component/homeStudent/homeStudent';
//import DataStudents from './Components/ManageStudent/DataStudents/DataStudents';
import Login from './Component/Login/login';

const routes = [
    {
        path: '/login',
        exact: false,
        component: Login
    },
    {
        path: '/home',
        exact: true,
        component: Students
    }
]

export default routes;