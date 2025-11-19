// import React, { useEffect, useMemo, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const initialValues = {
//   fullName: "",
//   email: "",
//   phone: "",
//   subject: "Support",
//   message: "",
//   contactMethod: "Email",
//   bestTime: "",
//   agree: false,
// };

// const Contact = () => {
//   const [values, setValues] = useState(initialValues);
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);
//   const navigate = useNavigate();

//   const fullNameRef = useRef(null);
//   const emailRef = useRef(null);
//   const phoneRef = useRef(null);
//   const messageRef = useRef(null);
//   const agreeRef = useRef(null);

//   const validate = (fields = values) => {
//     const e = {};

//     const name = fields.fullName.trim();
//     if (!name) e.fullName = "Full name is required.";
//     else if (name.length < 2) e.fullName = "Name must be at least 2 characters.";
//     else if (name.length > 50) e.fullName = "Name must be at most 50 characters.";

//     const email = fields.email.trim();
//     if (!email) e.email = "Email is required.";
//     else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       e.email = "Please enter a valid email address.";
//     }

//     const phone = fields.phone.trim();
//     if (phone && !/^\d{10}$/.test(phone)) {
//       e.phone = "Phone must be exactly 10 digits if provided.";
//     }

//     const msg = fields.message.trim();
//     if (!msg) e.message = "Message is required.";
//     else if (msg.length < 20) e.message = "Message must be at least 20 characters.";

//     if (!fields.agree) e.agree = "You must agree to the terms.";

//     return e;
//   };

//   useEffect(() => {
//     setErrors(validate(values));
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [values.fullName, values.email, values.phone, values.message, values.agree]);

//   const isFormValid = useMemo(
//     () => Object.keys(validate(values)).length === 0,
//     [values]
//   );

//   const handleChange = (e) => {
//     const { name, type, value, checked } = e.target;
//     setValues((prev) => ({
//       ...prev,
//       [name]: type === "checkbox" ? checked : value,
//     }));
//   };

//   const focusFirstInvalid = (err) => {
//     if (err.fullName && fullNameRef.current) fullNameRef.current.focus();
//     else if (err.email && emailRef.current) emailRef.current.focus();
//     else if (err.phone && phoneRef.current) phoneRef.current.focus();
//     else if (err.message && messageRef.current) messageRef.current.focus();
//     else if (err.agree && agreeRef.current) agreeRef.current.focus();
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validate(values);
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length > 0) {
//       focusFirstInvalid(validationErrors);
//       setSubmitted(false);
//       return;
//     }

//     setSubmitted(true);
//     const nameForThankYou = values.fullName.trim();
//     setValues(initialValues);

//     setTimeout(() => {
//       navigate("/thank-you", { state: { name: nameForThankYou } });
//     }, 300);
//   };

//   return (
//     <section className="page">
//       <div className="page-heading">
//         <h1>Contact</h1>
//         <p>Controlled form with validation and a colorful gradient theme.</p>
//       </div>

//       {submitted && (
//         <div className="banner success">
//           <strong>Success!</strong> Your message was submitted.
//         </div>
//       )}

//       <form className="card form-grid" onSubmit={handleSubmit} noValidate>
//         <div className="field">
//           <label htmlFor="fullName">Full Name *</label>
//           <input
//             id="fullName"
//             name="fullName"
//             ref={fullNameRef}
//             type="text"
//             value={values.fullName}
//             onChange={handleChange}
//             placeholder="Jeshwin William James"
//           />
//           {errors.fullName && <p className="error-text">{errors.fullName}</p>}
//         </div>

//         <div className="field">
//           <label htmlFor="email">Email *</label>
//           <input
//             id="email"
//             name="email"
//             ref={emailRef}
//             type="email"
//             value={values.email}
//             onChange={handleChange}
//             placeholder="you@example.com"
//           />
//           {errors.email && <p className="error-text">{errors.email}</p>}
//         </div>

//         <div className="field">
//           <label htmlFor="phone">Phone (optional)</label>
//           <input
//             id="phone"
//             name="phone"
//             ref={phoneRef}
//             type="tel"
//             value={values.phone}
//             onChange={handleChange}
//             placeholder="10-digit number"
//           />
//           {errors.phone && <p className="error-text">{errors.phone}</p>}
//         </div>

//         <div className="field">
//           <label htmlFor="subject">Subject</label>
//           <select
//             id="subject"
//             name="subject"
//             value={values.subject}
//             onChange={handleChange}
//           >
//             <option>Support</option>
//             <option>Sales</option>
//             <option>Feedback</option>
//             <option>Other</option>
//           </select>
//         </div>

//         <div className="field field-full">
//           <label htmlFor="message">Message *</label>
//           <textarea
//             id="message"
//             name="message"
//             ref={messageRef}
//             value={values.message}
//             onChange={handleChange}
//             placeholder="Write at least 20 characters..."
//           />
//           {errors.message && <p className="error-text">{errors.message}</p>}
//         </div>

//         <div className="field">
//           <fieldset>
//             <legend>Preferred Contact Method *</legend>
//             <label className="inline">
//               <input
//                 type="radio"
//                 name="contactMethod"
//                 value="Email"
//                 checked={values.contactMethod === "Email"}
//                 onChange={handleChange}
//               />
//               Email
//             </label>
//             <label className="inline">
//               <input
//                 type="radio"
//                 name="contactMethod"
//                 value="Phone"
//                 checked={values.contactMethod === "Phone"}
//                 onChange={handleChange}
//               />
//               Phone
//             </label>
//           </fieldset>
//         </div>

//         <div className="field">
//           <label htmlFor="bestTime">Best Time to Reach</label>
//           <select
//             id="bestTime"
//             name="bestTime"
//             value={values.bestTime}
//             onChange={handleChange}
//           >
//             <option value="">Any time</option>
//             <option>Morning</option>
//             <option>Afternoon</option>
//             <option>Evening</option>
//           </select>
//         </div>

//         <div className="field field-full">
//           <label className="inline checkbox-label">
//             <input
//               type="checkbox"
//               name="agree"
//               ref={agreeRef}
//               checked={values.agree}
//               onChange={handleChange}
//             />
//             I agree to the terms and conditions.
//           </label>
//           {errors.agree && <p className="error-text">{errors.agree}</p>}
//         </div>

//         <div className="field field-full form-actions">
//           <button
//             type="submit"
//             className="btn primary"
//             disabled={!isFormValid}
//           >
//             Send message
//           </button>
//           <span className="hint">* Required fields</span>
//         </div>
//       </form>
//     </section>
//   );
// };

// export default Contact;
import React, { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const initialValues = {
  fullName: "",
  email: "",
  phone: "",
  subject: "Support",
  message: "",
  contactMethod: "Email",
  bestTime: "",
  agree: false,
};

const Contact = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate();

  const fullNameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);
  const messageRef = useRef(null);
  const agreeRef = useRef(null);

  // 🛠 Wrapped validate inside useCallback for stable reference
  const validate = useCallback((fields = values) => {
    const e = {};

    const name = fields.fullName.trim();
    if (!name) e.fullName = "Full name is required.";
    else if (name.length < 2) e.fullName = "Name must be at least 2 characters.";
    else if (name.length > 50) e.fullName = "Name must be at most 50 characters.";

    const email = fields.email.trim();
    if (!email) e.email = "Email is required.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      e.email = "Please enter a valid email address.";
    }

    const phone = fields.phone.trim();
    if (phone && !/^\d{10}$/.test(phone)) {
      e.phone = "Phone must be exactly 10 digits if provided.";
    }

    const msg = fields.message.trim();
    if (!msg) e.message = "Message is required.";
    else if (msg.length < 20) e.message = "Message must be at least 20 characters.";

    if (!fields.agree) e.agree = "You must agree to the terms.";

    return e;
  }, [values]);

  useEffect(() => {
    setErrors(validate(values));
  }, [values, validate]);

  // 🛠 validate included in dependency array
  const isFormValid = useMemo(
    () => Object.keys(validate(values)).length === 0,
    [values, validate]
  );

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const focusFirstInvalid = (err) => {
    if (err.fullName && fullNameRef.current) fullNameRef.current.focus();
    else if (err.email && emailRef.current) emailRef.current.focus();
    else if (err.phone && phoneRef.current) phoneRef.current.focus();
    else if (err.message && messageRef.current) messageRef.current.focus();
    else if (err.agree && agreeRef.current) agreeRef.current.focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      focusFirstInvalid(validationErrors);
      setSubmitted(false);
      return;
    }

    setSubmitted(true);
    const nameForThankYou = values.fullName.trim();
    setValues(initialValues);

    setTimeout(() => {
      navigate("/thank-you", { state: { name: nameForThankYou } });
    }, 300);
  };

  return (
    <section className="page">
      <div className="page-heading">
        <h1>Contact</h1>
        <p>Controlled form with validation and a colorful gradient theme.</p>
      </div>

      {submitted && (
        <div className="banner success">
          <strong>Success!</strong> Your message was submitted.
        </div>
      )}

      <form className="card form-grid" onSubmit={handleSubmit} noValidate>
        <div className="field">
          <label htmlFor="fullName">Full Name *</label>
          <input
            id="fullName"
            name="fullName"
            ref={fullNameRef}
            type="text"
            value={values.fullName}
            onChange={handleChange}
            placeholder="Jeshwin William James"
          />
          {errors.fullName && <p className="error-text">{errors.fullName}</p>}
        </div>

        <div className="field">
          <label htmlFor="email">Email *</label>
          <input
            id="email"
            name="email"
            ref={emailRef}
            type="email"
            value={values.email}
            onChange={handleChange}
            placeholder="you@example.com"
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>

        <div className="field">
          <label htmlFor="phone">Phone (optional)</label>
          <input
            id="phone"
            name="phone"
            ref={phoneRef}
            type="tel"
            value={values.phone}
            onChange={handleChange}
            placeholder="10-digit number"
          />
          {errors.phone && <p className="error-text">{errors.phone}</p>}
        </div>

        <div className="field">
          <label htmlFor="subject">Subject</label>
          <select
            id="subject"
            name="subject"
            value={values.subject}
            onChange={handleChange}
          >
            <option>Support</option>
            <option>Sales</option>
            <option>Feedback</option>
            <option>Other</option>
          </select>
        </div>

        <div className="field field-full">
          <label htmlFor="message">Message *</label>
          <textarea
            id="message"
            name="message"
            ref={messageRef}
            value={values.message}
            onChange={handleChange}
            placeholder="Write at least 20 characters..."
          />
          {errors.message && <p className="error-text">{errors.message}</p>}
        </div>

        <div className="field">
          <fieldset>
            <legend>Preferred Contact Method *</legend>
            <label className="inline">
              <input
                type="radio"
                name="contactMethod"
                value="Email"
                checked={values.contactMethod === "Email"}
                onChange={handleChange}
              />
              Email
            </label>
            <label className="inline">
              <input
                type="radio"
                name="contactMethod"
                value="Phone"
                checked={values.contactMethod === "Phone"}
                onChange={handleChange}
              />
              Phone
            </label>
          </fieldset>
        </div>

        <div className="field">
          <label htmlFor="bestTime">Best Time to Reach</label>
          <select
            id="bestTime"
            name="bestTime"
            value={values.bestTime}
            onChange={handleChange}
          >
            <option value="">Any time</option>
            <option>Morning</option>
            <option>Afternoon</option>
            <option>Evening</option>
          </select>
        </div>

        <div className="field field-full">
          <label className="inline checkbox-label">
            <input
              type="checkbox"
              name="agree"
              ref={agreeRef}
              checked={values.agree}
              onChange={handleChange}
            />
            I agree to the terms and conditions.
          </label>
          {errors.agree && <p className="error-text">{errors.agree}</p>}
        </div>

        <div className="field field-full form-actions">
          <button type="submit" className="btn primary" disabled={!isFormValid}>
            Send message
          </button>
          <span className="hint">* Required fields</span>
        </div>
      </form>
    </section>
  );
};

export default Contact;
