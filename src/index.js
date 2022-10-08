import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route, Routes  } from "react-router-dom";
import { Home } from '@mui/icons-material';
import Login from './Pages/Home/Login/Login';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Router>
      <Routes>
        <Route index element={<App />}/>
        <Route path="login" element={<Login />} />
        <Route path = "dashboard" element = {<Home />} />
      </Routes>
    </Router> */}
    <App />
  </React.StrictMode>
);

