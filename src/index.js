import './index.css';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Error from './page/Error';
import About from './page/About';
import Contents from './page/Contents';
import LoginPage from './page/LoginPage';
import SignupPage from './page/SignupPage';
import Search from './page/Search';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/contents" element={<Contents />} >
          <Route path=":id" element={<Contents />} />
        </Route>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
