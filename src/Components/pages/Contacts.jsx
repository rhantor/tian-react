import React, { useState } from "react";
import { call, location, mail } from "../../constants/images";
import emailjs from "@emailjs/browser";
import { useNavigate } from "react-router-dom";

const Contacts = ({ children }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const naviget = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const templateParams = {
      name: name,
      email: email,
      subject: subject,
      message: message,
    };

    emailjs
      .send(
        "service_ns6jxe8",
        "template_oxnjbzr",
        templateParams,
        "VrrYupDuebtgZisdc"
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setEmail("");
          setName("");
          setSubject("");
          setMessage("");
          naviget("/react-templates/tian/thanks");
          setLoading(false);
        },
        (err) => {
          setLoading(false);
          console.log("FAILED...", err);
          setError(true);
        }
      );
  };
  return (
    <section className="contact_area section-padding">
      <div className="container">
        {children}

        <div className="row">
          <div className="col-xl-5 col-lg-5 col-md-5 col-12">
            <div className="contact_info">
              <img src={location} alt="location" />
              <h3>Location</h3>
              <p>4343 Binghamton, New York</p>
            </div>

            <div className="contact_info">
              <img src={call} alt="call" />
              <h3>Call Me</h3>
              <p>+123 456 7890</p>
            </div>

            <div className="contact_info">
              <img src={mail} alt="email" />
              <h3>Email Us</h3>
              <p>hello@example.com</p>
            </div>
          </div>

          <div className="col-xl-7 col-lg-7 col-md-7 col-12">
            <div className="contact-form">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <input
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Name"
                      required="required"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      style={error ? { borderColor: "red" } : null}
                    />
                  </div>
                  <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Email"
                      required="required"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={error ? { borderColor: "red" } : null}
                    />
                  </div>

                  <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                    <input
                      type="text"
                      name="subject"
                      className="form-control"
                      placeholder="Subject"
                      required="required"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      style={error ? { borderColor: "red" } : null}
                    />
                  </div>

                  <div className="col-xl-12 col-lg-12 col-md-12 col-12">
                    <textarea
                      name="message"
                      className="form-control"
                      placeholder="Your Message"
                      required="required"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      style={error ? { borderColor: "red" } : null}
                    />
                  </div>

                  <div
                    className="col-xl-12 col-lg-12 col-md-12 col-12 d-flex"
                    style={{ alignItems: "center" }}
                  >
                    <button
                      className="contact_btn"
                      type="submit"
                      style={
                        error ? { borderColor: "red", color: "red" } : null
                      }
                    >
                      {loading ? "sending..." : "Submit Now"}
                    </button>
                    <p style={{ color: "red", padding: "1rem 0 0 1rem" }}>
                      {error && "ERR_INTERNET_DISCONNECTED !"}
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
