import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <div className="cwd">
        <h4 className="footer-cr">
          Morning &copy; 2020 by Cinque Web Development
        </h4>
        <p className="footer-cr">
          Built with &nbsp;
          <a className="react" href="/">
            React
          </a>
        </p>
        <p className="footer-cr">
          Theme based on &nbsp;
          <a
            className="react"
            target="_blank"
            rel="noreferrer"
            href="https://www.gatsbyjs.com/starters/maxpou/gatsby-starter-morning-dew/"
          >
            gatsby-starter-morning-dew
          </a>
        </p>
        <p className="footer-cr">Hosted by Netlify</p>
      </div>
      <div className="explore">
        <h4 className="footer-cr">Explore</h4>
        <a className="footer-explore" href="/blog">Blog</a>
        <a className="footer-explore" href="/about">About</a>
        <a className="footer-explore" href="/installation">Installation</a>
      </div>
      <div className="author">
        <h4 className="footer-cr">Follow the Author</h4>
        <a className="footer-social" href="https://github.com/samueltrahan">GitHub</a>
        <a className="footer-social" href="https://www.samueltrahan.com">Website</a>
        <a className="footer-social" href="https://twitter.com/SamuelTrahan4">Twitter</a>
      </div>
    </section>
  );
}
