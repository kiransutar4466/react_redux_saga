import React from 'react'
import { Navigate } from 'react-router-dom'

import Login from '../pages/Authentication/Login'
import Cart from '../pages/Cart'
import Home from '../pages/Home'

const AUTH_PROTECTED_ROUTES = [
    { path: '/cart', component: <Cart /> },
    { path: '/home', component: <Home /> },

    { path: '*', component: <Navigate to='/home' replace /> },
]

const PUBLIC_ROUTES = [
    { path: '/login', component: <Login /> },

    { path: '/', component: <Navigate to='/home' /> }
]

export { AUTH_PROTECTED_ROUTES, PUBLIC_ROUTES }
