import './App.css';
import React from "react";
import Login from './component/Login/Login';
import SignUp from './component/Sign-up/Sign-up';
import Main from './component/Main/Main';
import Profile from './component/Profile/Profile';

function App() {

  return (
    <div className="App">
      <Login/>
      {/* <Main/>
      <Profile/>
      <SignUp/> */}
    </div>
  );
}

export default App;