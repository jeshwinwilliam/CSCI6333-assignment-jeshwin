import React from "react";
import { Link, useLocation } from "react-router-dom";

const ThankYou = () => {
  const location = useLocation();
  const name = location.state?.name || "there";

  return (
    <section className="page">
      <div className="card thankyou-card">
        <h1>Thank you, {name}!</h1>
        <p>
          Your message has been received. This imaginary support team will get
          back to you soon.
        </p>
        <div className="hero-actions">
          <Link to="/contact" className="btn primary">
            Send another message
          </Link>
          <Link to="/" className="btn ghost">
            Back to Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
