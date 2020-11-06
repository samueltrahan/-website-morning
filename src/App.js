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
      <Section />
      <Footer />
    </div>
  )
}
