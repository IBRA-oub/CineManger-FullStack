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
import SalleGestion from './pages/SalleGestion';
import ShowTimeGestion from './pages/ShowTimeGestion';
import Forbidden from './pages/Forbidden';

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
                <PrivateRoute role='client'>
                  <ClientReservation />
                </PrivateRoute>
              } 
            />
            <Route 
              path='/client-tickets'  
              element={
                <PrivateRoute role='client'>
                  <ClientTickets />
                </PrivateRoute>
              } 
            />
            <Route 
              path='/my-account'  
              element={
                <PrivateRoute role='client'>
                  <UserInfo/>
                </PrivateRoute>
              } 
            />
            <Route 
              path='/film-stream/:id'  
              element={
                <PrivateRoute role='client'>
                  <FilmStream />
                </PrivateRoute>
              } 
            />
            <Route path='/reservation/:id'  element={<Reservation />}></Route>
            <Route 
              path='/dashboard-admin'  
              element={
                <PrivateRoute role='admin'>
                  <DashboardAdmin/>
                </PrivateRoute>
              } 
            />
            <Route 
              path='/Customer'  
              element={
                <PrivateRoute role='admin'>
                  <CostumerInfo/>
                </PrivateRoute>
              } 
            />
            <Route 
              path='/Films'  
              element={
                <PrivateRoute role='admin'>
                  <FilmGestion/>
                </PrivateRoute>
              } 
            />
            <Route 
              path='/Salles'  
              element={
                <PrivateRoute role='admin'>
                  <SalleGestion/>
                </PrivateRoute>
              } 
            />
            <Route 
              path='/Show-time'  
              element={
                <PrivateRoute role='admin'>
                  <ShowTimeGestion/>
                </PrivateRoute>
              } 
            />

            <Route path='*' element={<PageNotFound />}></Route>
            <Route path='/forbiden' element={<Forbidden />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
