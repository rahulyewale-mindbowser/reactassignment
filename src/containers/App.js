import './App.css';
import {useEffect, useState} from 'react'
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import CardList from './cardList';
import UserForm from '../components/UserForm';
import MiniDrawer from '../components/sidebar';
import Header from '../components/header';
import CollegeList from './collegeList';

function App() {

  return (
    <div>
      <BrowserRouter>

        <Header />
        <MiniDrawer>
        


        <Routes>
            <Route path="/userlist" element={<CardList />} />
            <Route path="/userform" element={<UserForm />} />
            <Route path='/colleges' element={<CollegeList/>} />

            <Route path={"*"} element={<Navigate to="/userlist" />} />
        </Routes>
        </MiniDrawer>
      </BrowserRouter>
    </div>
  );
}

export default App;
