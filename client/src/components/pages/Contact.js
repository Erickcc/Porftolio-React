import React, { useState } from "react";
import "../styles/Contact.css";

export default function Contact() {
  const [userName, setName] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userMessage, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "name") {
      return setName(value);
    } else if (name === "email") {
      return setEmail(value);
    } else {
      return setMessage(value);
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (userName.length===0 || userEmail.length===0 || userMessage.length===0) {
      alert("Please fill all the fields in the form");
      console.log(userName, userEmail, userMessage);
    } else {
      alert(`Hello ${userName}, I will get in touch with you soon!`);
      setName("");
      setEmail("");
      setMessage("");
    }
  };

  return (
    <div className="contactContainer">
      <div className="contactMessage">Contact Me</div>
      <form className="formContainer">
        <div className="form-group mt-2 ">
          <label>Name</label>
          <input
            value={userName}
            name="name"
            type="text"
            className="form-control"
            id="formName"
            placeholder=""
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="form-group mt-2">
          <label>Email address</label>
          <input
            value={userEmail}
            name="email"
            type="email"
            className="form-control"
            id="formEmail"
            placeholder="name@example.com"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="form-group mt-2">
          <label>Message</label>
          <textarea
            value={userMessage}
            name="comment"
            className="form-control"
            id="formMessage"
            rows="8"
            onChange={handleInputChange}
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn btn-secondary mt-3 formButton"
            onClick={handleFormSubmit}
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
