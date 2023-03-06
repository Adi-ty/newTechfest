"use client";
import React, { useState } from "react";

const Page = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("https://example.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });
    const data = await response.json();
    setStatus(data.message);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-form">
      <div className="contact-header">Contact Us</div>
      <style jsx>{`
        .contact-form {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-left: 2rem;
          width: 50%;
          background-color: black;
          padding: 2rem;
          border-radius: 0;
          box-sizing: border-box;
        }
        .contact-header {
          margin-top: 0;
          color: white;
          font-size: 2rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 2rem;
          width: 100%; 
        }
        form {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          width: 100%;
          box-sizing: border-box;
        }
        .form-field {
          margin-bottom: 1rem;
          width: 100%;
        }
        .field-label {
          display: block;
          font-size: 1rem;
          font-weight: light;
          color: white;
          margin-bottom: 0.5rem;
        }
        .text-input {
          width: 100%;
          max-width: 500px;
          padding: 0.5rem;
          border-radius: 0;
          border: 1px solid #ccc;
          font-size: 1rem;
        }
        .submit-button {
          margin-top: 1rem;
          padding: 0.5rem 1rem;
          border-radius: 0;
          border: none;
          background-color: purple;
          color: white;
          font-size: 1.2rem;
          font-weight: bold;
          cursor: pointer;
        }
        .map-container {
          position: relative;
          width: 50%;
          height: 100%;
        }
        
        .map {
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 100%;
        }
        
        
      `}</style>
      {status && <div className="status">{status}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label htmlFor="name" className="field-label">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
            className="text-input"
          />
        </div>
        <div className="form-field">
          <label htmlFor="email" className="field-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className="text-input"
          />
        </div>
        <div className="form-field">
          <label htmlFor="message" className="field-label">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Enter your message"
            className="text-input"
            rows="6"
          ></textarea>
        </div>
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

    </div>
  );
};

export default Page;
