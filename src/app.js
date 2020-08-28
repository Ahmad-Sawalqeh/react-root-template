import React from 'react';
import Header from './components/header';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Blog from './components/blog';
import Numbers from './components/numbers';
import Contact from './components/contact';
import Map from './components/map';
import Footer from './components/footer';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Services />
      <Blog />
      <Numbers />
      <Contact />
      <Map />
      <Footer />
    </>
  );
}

export default App;