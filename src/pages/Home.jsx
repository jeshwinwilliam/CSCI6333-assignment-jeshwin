import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="page page-home">
      <div className="card hero">
        <p className="badge">CSCI 6333 · Assignment 04</p>
        <h1>React Router &amp; Modern Forms</h1>
        <p className="hero-text">
          Multi-page SPA with controlled and uncontrolled forms, built by{" "}
          <strong>Jeshwin William James</strong>.
        </p>
        <div className="hero-actions">
          <Link to="/contact" className="btn primary">
            Open Contact Form
          </Link>
          <Link to="/feedback" className="btn ghost">
            Leave quick feedback
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home;
