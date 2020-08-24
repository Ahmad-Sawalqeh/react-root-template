import React from 'react';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Blog from './components/blog';
import Numbers from './components/numbers';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Blog />
      <Numbers />
    </>
  );
}

export default App;