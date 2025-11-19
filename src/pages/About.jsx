// src/pages/About.jsx
import React from "react";

const About = () => {
  return (
    <section className="page">
      <div className="card">
        <h1>About this mini app</h1>
        <p>
          This project was created for CSCI 6333 Assignment 04 to practice
          React Router along with controlled and uncontrolled forms.
        </p>

        <h2>Who we are</h2>
        <p>
          My name is <strong>Jeshwin William James</strong>, and I am pursuing
          my M.S. in Computer Science at Oklahoma City University.
        </p>

        <h2>Our mission</h2>
        <p>
          Build a small but polished single-page application that clearly
          demonstrates routing, validation, and modern UI design.
        </p>

        <h2>Tech stack</h2>
        <ul className="pill-list">
          <li>React 18</li>
          <li>React Router</li>
          <li>Hooks &amp; Validation</li>
          <li>Gradient-based styling</li>
        </ul>

        {/* 👇 Add this image to satisfy the assignment requirement */}
        <div style={{ marginTop: "1rem" }}>
          <img
            src="https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=800"
            alt="Colorful developer workspace"
            style={{
              width: "100%",
              maxHeight: "260px",
              objectFit: "cover",
              borderRadius: "0.9rem",
              border: "1px solid rgba(148,163,184,0.7)",
              marginTop: "0.5rem",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default About;

