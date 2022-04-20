import './App.css';
import {useEffect, useState} from 'react'
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import CardList from './cardList';
import UserForm from '../components/UserForm';
import Header from '../components/header';

function App() {

  return (
    <div>
      <BrowserRouter>
      <div>
        <Header />
      </div>

        <Routes>
            <Route path="/userlist" element={<CardList />} />
            <Route path="/userform" element={<UserForm />} />

            <Route path={"*"} element={<Navigate replace to="/userlist" />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
