import logo from "./logo.svg";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./component/Admin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
