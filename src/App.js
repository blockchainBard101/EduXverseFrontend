import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Learn, Earn, Connect, Signup, UserPanel, Quiz } from './Components/index';
import Explore from './Pages/Explore/Explore';
import Callback from './Callback.tsx';
import { AuthService } from './utils/authService.ts';
import { addUser } from './backend/index.ts';

function App() {
  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        if (AuthService.isAuthenticated()) {
          console.log('User is already authenticated', AuthService.walletAddress());
          console.log(AuthService.walletAddress());
          await addUser(AuthService.gmail_address(), AuthService.walletAddress());
        } else {
          console.log("Not authenticated");
        }
      } catch (error) {
        console.error("Error adding user:", error);
      }
    };

    checkAuthentication();
  }, []); // Empty dependency array to run the effect once on mount

  return (
    <div className="eduxverse-app">
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/earn" element={<Earn />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/user" element={<UserPanel />} />
          <Route path="/quiz/:courseId" element={<Quiz />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/" element={<Callback />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
