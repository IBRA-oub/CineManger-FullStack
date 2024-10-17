import { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from './routes/layouts';
import Home from './pages/Home';
import './App.css'
import PageNotFound from './pages/PageNotFound';
import AllSessionFilm from './pages/AllSessionFilm';
import Register from './pages/Register';
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import ResetPassword from './pages/ResetPassword';
import ClientReservation from './pages/ClientReservation';
import ClientTickets from './pages/ClientTickets';
import Reservation from './pages/Reservation';
import PrivateRoute from './routes/privateRoute';
import FilmStream from './pages/FilmStream';
import UserInfo from './pages/UserInfo';
import DashboardAdmin from './pages/DashboardAdmin';
import CostumerInfo from './pages/CostumerInfo';
import FilmGestion from './pages/FilmGestion';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path='/all-session-film/:id'  element={<AllSessionFilm />}></Route>
            <Route path='/register'  element={<Register />}></Route>
            <Route path='/login'  element={<Login />}></Route>
            <Route path='/forget-password'  element={<ForgetPassword />}></Route>
            <Route path='/reset-password/:token'  element={<ResetPassword />}></Route>
            
            <Route 
              path='/client-reservation'  
              element={
                <PrivateRoute>
                  <ClientReservation />
                </PrivateRoute>
              } 
            />
            <Route 
              path='/client-tickets'  
              element={
                <PrivateRoute>
                  <ClientTickets />
                </PrivateRoute>
              } 
            />
            <Route 
              path='/my-account'  
              element={
                <PrivateRoute>
                  <UserInfo/>
                </PrivateRoute>
              } 
            />
            <Route 
              path='/film-stream/:id'  
              element={
                <PrivateRoute>
                  <FilmStream />
                </PrivateRoute>
              } 
            />
            <Route path='/reservation/:id'  element={<Reservation />}></Route>
            <Route path='/dashboard-admin'  element={<DashboardAdmin/>}></Route>
            <Route path='/Customer'  element={<CostumerInfo/>}></Route>
            <Route path='/Films'  element={<FilmGestion/>}></Route>
            <Route path='*' element={<PageNotFound />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
