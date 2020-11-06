import React from "react";
import "./Section.css";

export default function Section({ title, paragraph, path }) {
  return (
    <div className="section">
      <div className="post">
        <h1 className="title">{title}</h1>
        <p className="paragraph">{paragraph}</p>
        <a className="path" href={path}>
          READ POST &gt;
        </a>
      </div>
    </div>
  );
}
