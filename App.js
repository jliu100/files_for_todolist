// import React, {useEffect, useState} from 'react';
// import {BrowserRouter , Router, Route, Switch, Link,Redirect} from 'react-router-dom';
// import axios from "axios";
import React from 'react';
import {BrowserRouter , Route} from 'react-router-dom';


import Home from './pages/Home';
import Signup from './pages/Signup';
import NewAccount from './pages/newAccount'
import About from './pages/About';
import Element from './pages/Element';
import AddItem from './pages/AddItem';
// import User from './pages/User';


const App =() => {


  return(

    <BrowserRouter>
      <Route
        path="/"
        exact
        component ={Home} />
      <Route
        path="/signup"
        exact
        component ={Signup} />
      <Route
        path="/newU/:newName"
        exact 
        component ={NewAccount} />
        
      <Route
        path="/list/:name"
        exact
        component ={About} />
      <Route
        path="/finEl/:token/:elementId/:name"
        exact
        component ={Element} />
      <Route
        path="/addNewItem/:name/:token"
        exact
        component ={AddItem} />
      

    </BrowserRouter>


  );
};

export default App;

//need to install react-router-dom

