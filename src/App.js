import * as React from "react";
import { Routes, Route } from "react-router-dom";
import PhotoList from './components/PhotoList';
import Error from "./components/Error";
import PhotoView from "./components/PhotoView";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/photolist" element={<PhotoList />} />
        <Route path="/photolist/:photoId" element={<PhotoView />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App

// original - <Route path="/photolist/:photoId" element={<PhotoView />} />