import React, { useState } from "react";
import "../css/Contact.css";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all fields!");
      return;
    }
    alert("✅ Message sent successfully! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-container">
      <h1>📩 Contact Us</h1>
      <p className="contact-intro">
        Have a question or suggestion? We’d love to hear from you!
      </p>

      <form onSubmit={handleSubmit} className="contact-form">
        <input
          name="name"
          value={form.name}
          placeholder="Your Name"
          onChange={handleChange}
          required
        />
        <input
          name="email"
          type="email"
          value={form.email}
          placeholder="Your Email"
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          value={form.message}
          placeholder="Your Message"
          rows="5"
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
