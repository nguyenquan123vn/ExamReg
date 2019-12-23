import React, { Component } from 'react';
import Students from './Components/ManageStudent/ManageClass';
import Exams from './Components/ManageExam/ManageExam';
import DataStudents from './Components/ManageStudent/DataStudents/DataStudents';
import Login from './Components/Login/Login';

const routes = [
    {
        path: '/login',
        exact: false,
        component: Login
    }
]

export default routes;