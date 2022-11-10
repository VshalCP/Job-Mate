import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice"
import './App.css';
import Feed from './Feed';
import Header from './Header';
import Sider from './Sider';
import Login from './Login';
import { auth } from './firebase';
import Widgets from './Widgets';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        //user is logged in
        dispatch(
          login({
          email: userAuth.email,
          uid: userAuth.uid,
          displayName: userAuth.displayName,
          photoUrl: userAuth.photoURL,
        })
        );
      }
      else{
        // user is logged out
        dispatch(logout());
      }
    });
  }, []);





  return (
    <div className="App">
      <Header/>

      {!user ? (
      <Login /> 
      ) : (                 //if there is no user then render login page otherwise render rest of app 
              <div className="Content">
              <Sider />
              <Feed />
              <Widgets />
              
              </div>
      )}
      
  

      {/* footer */}

    </div>
  );
}

export default App;
