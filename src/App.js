import React from 'react';
import logo from './logo.svg';
import { setConfiguration } from "react-grid-system";
import './styles/App.scss';
import LandingPage from './components/landing-page';
import FlowScreen from './components/flow-screen';
import Navbar from './components/navbar';
import Footer from './components/footer';

setConfiguration({
  defaultScreenClass: 'sm',
  gutterWidth: 40,
  containerWidths: [2000, 2000, 2000, 2000]
});

function App() {
  return (
    <div>
      <LandingPage />
      <FlowScreen />
      <Footer />
    </div>
  );
}

export default App;
