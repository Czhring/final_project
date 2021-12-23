import './App.css';
import React from "react";
import Main from './component/Main/Main';
import Profile from './component/Profiles/Profile';
import{Route, Routes,} from 'react-router-dom'
import Login from './component/Login/Login';
import Header from './component/Header/Header';
import Register from './component/Register/Register';


function App() {

  return (
    <div>
      {/* <Header />
      <Login />
      <SignUp />
      <Main /> */}
      <Header />
      {/* <Login />
      <Register /> */}
      <Routes>
            <Route exact path='/' element={<Login/>}/>
            <Route exact path= '/register' element={<Register/>}/>
            <Route exact path='/main' element={<Main/>}/>
            <Route exact path= '/profile' element={<Profile/>}/>
      </Routes>
    </div>
  )
  }
export default App;