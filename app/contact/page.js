"use client";
import React, { useState } from "react";
import styles from "./page.module.css";

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
    <div className={styles.contactForm}>
      <div className={styles.contactHeader}>Contact Us</div>
      {status && <div className={styles.status}>{status}</div>}
      <form onSubmit={handleSubmit}>
        <div className={styles.formField}>
          <label htmlFor="name" className={styles.fieldLabel}>
            Name
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
            className={styles.textInput}
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="email" className={styles.fieldLabel}>
            Email
          </label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
            className={styles.textInput}
          />
        </div>
        <div className={styles.formField}>
          <label htmlFor="message" className={styles.fieldLabel}>
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            placeholder="Enter your message"
            className={styles.textInput}
            rows="6"
          ></textarea>
        </div>
        <button type="submit" className={styles.submitButton}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Page;
