import React from 'react';
import './Footer.css'

export default function Footer() {
  return (
      <section className="footer">
        <div className="cwd">
        <h4 className="footer-cr">Morning &copy; 2020 by Cinque Web Development</h4>
        <p className="footer-cr">Built with &nbsp;<a className="react" href="/">React</a></p>
        </div>
        <div className="explore">
          <h4 className="footer-cr">Explore</h4>
        </div>
        <div className="author">
          <h4 className="footer-cr">Follow the Author</h4>
        </div>
      </section>
  )
}
