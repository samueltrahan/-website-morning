import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import Banner from './components/Banner/Banner';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div>
      <NavBar />
      <Banner />
      <Section title="Using Morning" paragraph="Hello, world!  Thank you for checking out Morning a React-starter by Cinque Web Development.  In this post we will explain how to get started using this starter." path='/morning' />
      <Section />
      <Section />
      <Section />
      <Footer />
    </div>
  )
}
