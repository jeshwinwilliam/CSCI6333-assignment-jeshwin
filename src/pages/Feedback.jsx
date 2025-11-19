import React, { useRef, useState } from "react";

const Feedback = () => {
  const nicknameRef = useRef(null);
  const ratingRef = useRef(null);
  const recommendRef = useRef(null);
  const commentsRef = useRef(null);

  const [summary, setSummary] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const nickname = nicknameRef.current?.value || "";
    const rating = ratingRef.current?.value || "";
    const recommend = !!recommendRef.current?.checked;
    const comments = commentsRef.current?.value || "";

    if (!rating) {
      setError("Please choose a rating between 1 and 5.");
      setSummary(null);
      return;
    }

    setError("");
    setSummary({
      nickname: nickname || "Anonymous",
      rating,
      recommend,
      comments,
    });
  };

  return (
    <section className="page">
      <div className="page-heading">
        <h1>Feedback</h1>
        <p>Uncontrolled form using refs with a live summary card.</p>
      </div>

      <form className="card form-grid" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="nickname">Nickname</label>
          <input
            id="nickname"
            ref={nicknameRef}
            type="text"
            placeholder="Optional nickname"
          />
        </div>

        <div className="field">
          <label htmlFor="rating">Rating (1–5)*</label>
          <select id="rating" ref={ratingRef} defaultValue="">
            <option value="" disabled>
              Select rating
            </option>
            <option value="1">1 – Needs work</option>
            <option value="2">2</option>
            <option value="3">3 – Okay</option>
            <option value="4">4</option>
            <option value="5">5 – Great</option>
          </select>
        </div>

        <div className="field">
          <label className="inline checkbox-label">
            <input type="checkbox" ref={recommendRef} />
            Would recommend this site
          </label>
        </div>

        <div className="field field-full">
          <label htmlFor="comments">Comments</label>
          <textarea
            id="comments"
            ref={commentsRef}
            placeholder="Share any extra thoughts here..."
          />
        </div>

        <div className="field field-full form-actions">
          <button type="submit" className="btn primary">
            Submit feedback
          </button>
        </div>

        {error && (
          <div className="field field-full error-text">{error}</div>
        )}
      </form>

      {summary && (
        <div className="card summary-card">
          <h2>Feedback summary</h2>
          <p>
            <strong>Nickname:</strong> {summary.nickname}
          </p>
          <p>
            <strong>Rating:</strong> {summary.rating} / 5
          </p>
          <p>
            <strong>Would recommend:</strong>{" "}
            {summary.recommend ? "Yes" : "No"}
          </p>
          {summary.comments && (
            <p>
              <strong>Comments:</strong> {summary.comments}
            </p>
          )}
        </div>
      )}
    </section>
  );
};

export default Feedback;
