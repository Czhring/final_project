import './App.css';
import React from "react";
import SignUp from './component/Register/Register';
import Main from './component/Main/Main';
import Profile from './component/Profile/Profile';
import{Route, Routes,Router,Link} from 'react-router-dom'
import Login from './component/Login/Login';
import Header from './component/Header/Header';


function App() {
  //   return (<Router>
  //     <div className="App">
  //       <nav className="navbar navbar-expand-lg navbar-light fixed-top">
  //         <div className="container">
  //           <Link className="navbar-brand" to={"/sign-in"}>RemoteStack</Link>
  //           <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
  //             <ul className="navbar-nav ml-auto">
  //               <li className="nav-item">
  //                 <Link className="nav-link" to={"/sign-in"}>Sign in</Link>
  //               </li>
  //               <li className="nav-item">
  //                 <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
  //               </li>
  //             </ul>
  //           </div>
  //         </div>
  //       </nav>
  
  //       <div className="outer">
  //         <div className="inner">
  //           <Routes>
  //             <Route exact path='/' component={Login} />
  //             <Route path="/sign-in" component={Login} />
  //             <Route path="/sign-up" component={SignUp} />
  //           </Routes>
  //         </div>
  //       </div>
  //     </div></Router>
  //   );
  // }
  return (
    <div>
      <Header />
      <Login />
      <SignUp />
      <Main />
    </div>
  )
  }
export default App;