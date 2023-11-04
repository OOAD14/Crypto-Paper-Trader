import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import Exchange from "../pages/exchange/Exchange"
import Transactions from '../pages/transactions/Transactions'
import Market from '../pages/market/Market'
import PrivateRoute from "./PrivateRoute"
import RedirectDash from './RedirectDash'

const BasicRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<RedirectDash><Home /></RedirectDash>} />
            <Route path='/exchange' element={<PrivateRoute><Exchange /></PrivateRoute>} />
            <Route path='/market' element={<PrivateRoute><Market /></PrivateRoute>} />
            <Route path='/transactions' element={<PrivateRoute><Transactions /></PrivateRoute>} />
            
        </Routes>
    )
}

export default BasicRoutes