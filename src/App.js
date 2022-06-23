import * as React from "react";
import { Routes, Route } from "react-router-dom";
import PhotoList from './components/PhotoList';
import Error from "./components/Error";
import PhotoView from "./components/PhotoView";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<PhotoList />} />
        <Route path="/photoview" element={<PhotoView />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App