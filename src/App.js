import React from 'react';
import './App.css';
import Top from "components/Top";
import NavBar from 'components/NavBar';
import RollingBanner from 'components/RollingBanner';
import { Outlet } from 'react-router-dom';

function App() {
  return (
  <>
    <Top />
    <NavBar />
    <RollingBanner />
    <Outlet />
  </>
  );
}

export default App;
