import * as React from 'react';
import { createRoot } from 'react-dom/client';
import Cards from './components/portfolio';
import { BackgroundImage } from './components/backgroundImage';
import './styles.scss';
import Portfolio from './components/portfolio';

export default function App() {
  
  return (
    <>
      <BackgroundImage />
      <Portfolio />
    </>
  );
}

createRoot(document.getElementById('container-fluid')).render(<App />);
