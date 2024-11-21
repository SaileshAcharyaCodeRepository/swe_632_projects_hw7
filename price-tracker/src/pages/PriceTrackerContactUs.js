// Gemini AI assisted code

import React, { useState, useRef } from "react";

import emailjs from "@emailjs/browser";

import { Button, Form, Toast, ToastContainer } from "react-bootstrap";

import { useTheme } from "../contexts/ThemeProvider";

import "../styles/PriceTrackerContactUs.css";

const PriceTrackerContactUs = () => {
  const { theme } = useTheme();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const [showToastSuccess, setShowToastSuccess] = useState(false);
  const toggleShowToastSuccess = () => setShowToastSuccess(!showToastSuccess);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (
      name.trim().length !== 0 &&
      text.trim().length !== 0 &&
      email.includes("@")
    ) {
      emailjs
        // .sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
        .sendForm(
          "service_qqgjkzu",
          "template_2amcfgx",
          form.current,
          "0y17vVwacGFPJjgIo"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            // Optionally reset the form or display a success message
            setName("");
            setEmail("");
            setText("");
          },
          (error) => {
            console.log("FAILED...", error.text);
            // Optionally display an error message
          }
        );

      setShowToastSuccess(true);
    } else {
      console.log(
        "name: ",
        name.trim().length,
        " text: ",
        text.trim().length,
        " email: ",
        email.includes("@")
      );
    }
  };

  return (
    <>
      <div className="price-tracker-contact-us-page">
        <div>
          <br />
          <br />
          <h1>Have Questions? Comments?</h1>
          <br />
          <h2>Send us a message</h2>
        </div>
        <div className="price-tracker-contact-us-page-form">
          <br />
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="user_name"
                value={name}
                placeholder="Enter your name"
                required={true}
                onChange={(e) => setName(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="user_email"
                value={email}
                placeholder="Enter your email"
                required={true}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            <br />
            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                value={text}
                rows={3}
                required={true}
                placeholder="Enter your message"
                onChange={(e) => setText(e.target.value)}
              />
            </Form.Group>

            <Button
              className="price-tracker-contact-us-page-button btn-lg"
              variant="success"
              type="submit"
            >
              Send
            </Button>
          </Form>

          {/*This is Toast Component to show review sent*/}
          <ToastContainer className="p-3" position="bottom-center">
            <Toast
              className="toast-center"
              show={showToastSuccess}
              onClose={toggleShowToastSuccess}
              delay={3000}
              autohide={true}
              bg="success"
            >
              <Toast.Body className={"text-white"}>Email Submitted</Toast.Body>
            </Toast>
          </ToastContainer>
          {/*This is Toast Component to show review sent*/}
        </div>
      </div>
    </>
  );
};

export default PriceTrackerContactUs;
