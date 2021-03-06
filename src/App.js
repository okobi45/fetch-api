import * as React from "react";
import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import PhotoList from './components/PhotoList';
import Error from "./components/Error";
import PhotoView from "./components/PhotoView";
import Home from "./components/Home";
import MaLogin from "./components/MaLogin";
import MaSignUp from "./components/MaSignUp";
import { auth } from "./Firebase";



function App() {
  const navigate = useNavigate();

  useEffect(() => {
    let authToken = sessionStorage.getItem('Auth Token')

    if (authToken) {
      navigate('/photolist')
    }
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photolist" element={<PhotoList />} />
        <Route path="/photolist/:photoId" element={<PhotoView />} />
        <Route path="/malogin" element={<MaLogin />} />
        <Route path="/masignup" element={<MaSignUp />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App

// original - <Route path="/photolist/:photoId" element={<PhotoView />} />