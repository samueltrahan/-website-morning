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
      <Section title="Styling Your Project" paragraph="Want to make your projects like great with ease.  This article will introduce you to Satellite, a framework so easy to use it's out of this world!" path="/satellite"/>
      <Section title="Plan Your Trip" paragraph="Trippin' is an application made for planning trip. It's just like TripAdvisor." path="/trippin"/>
      <Section title="Caddie Golf" paragraph="Caddie is an golf course search app made with React.  Read the article to see how it was made and the process to make it happen."/>
      <Footer />
    </div>
  )
}
