import React, { useState } from "react";
import "./Contact.css";
import img1 from "../../assets/email.png";
import link from "../../assets/link.png";
import git from "../../assets/git.png";

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = (formData) => {
    const errs = {};
    if (!formData.get("name")?.trim()) errs.name = "Name is required.";
    const email = formData.get("email")?.trim();
    if (!email) {
      errs.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "Please enter a valid email address.";
    }
    if (!formData.get("message")?.trim()) errs.message = "Message is required.";
    return errs;
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const errs = validate(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setLoading(true);
    formData.append("access_key", "06805a31-f215-4145-8f1f-336f3285c66a");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    setLoading(false);
    if (res.success) {
      alert("Message sent successfully!");
      event.target.reset();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        {/* <img src={} alt="" /> */}
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Lets's talk</h1>
          <p>
            I'm always open to new opportunities and exciting collaborations.
            Whether you have a project in mind, or
            simply want to connect, feel free to reach out!
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={img1} alt="" />
              <p>
                <a href="mailto:anuragk.c11@gmail.com">anuragk.c11@gmail.com</a>
              </p>
            </div>
            <div className="contact-detail">
              <img src={link} />
              <p>
                <a
                  href="https://www.linkedin.com/in/anurag-kumar-87ab681b2/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </p>
            </div>
            <div className="contact-detail">
              <img src={git} />
              <p>
                <a
                  href="https://github.com/anuragk27"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="name">Your Name</label>
          <input
            id="name"
            type="text"
            placeholder="Enter your name"
            name="name"
            onChange={() => setErrors((e) => ({ ...e, name: "" }))}
          />
          {errors.name && <span className="form-error">{errors.name}</span>}

          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={() => setErrors((e) => ({ ...e, email: "" }))}
          />
          {errors.email && <span className="form-error">{errors.email}</span>}

          <label htmlFor="message">Write your message here</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            placeholder="Enter your message"
            onChange={() => setErrors((e) => ({ ...e, message: "" }))}
          ></textarea>
          {errors.message && <span className="form-error">{errors.message}</span>}

          <button type="submit" className="contact-submit" disabled={loading}>
            {loading ? "Sending..." : "Submit now"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
