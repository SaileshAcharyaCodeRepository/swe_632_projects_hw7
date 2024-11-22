// Gemini AI assisted code

import React, { useState, useRef } from "react";

import { Link } from "react-router-dom";

import emailjs from "@emailjs/browser";

import { Button, Form, Toast, ToastContainer } from "react-bootstrap";

import { useTheme } from "../contexts/ThemeProvider";

import "../styles/PriceTrackerContactUs.css";

const HelpPage = () => {
  const faqData = [
    {
      question: "What is this Website Used for?",
      answer:
        "This website aims to assist users by providing a tool to track product prices across multiple online retailers in a single location.",
    },
    {
      question: "How do I add Product to Track?",
      answer:
        "Price Tracker page has an add button to add product to track, once clicked it will prompt for product name and number then this will generate a card with two buttons, edit and details and outer button to remove the product. Additional option to add websites to be tracked and details to show the price and name of the websites. The Details button will show the websites and prices on a table.",
    },
    {
      question: "What does a Review page do?",
      answer:
        "Community page to provide product reviews of any product that was bought.",
    },
    {
      question: "What is a Contact page have?",
      answer: "The page to send email to the owner of the page.",
    },
    // Add more FAQ items here
  ];

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
      <div>
        <h1>Frequently Asked Questions</h1>
        <br />
        <br />
        <div
          className="faq-container"
          style={{ textAlign: "left", padding: "20px" }}
        >
          {faqData.map((faq, index) => (
            <div className="faq-item" key={index}>
              <h3>{faq.question}</h3>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
        {/*
      <ul>
        <li>
          <strong>Question 1:</strong> What is this Website Used for?
          <p>
            This website aims to assist users by providing a tool to track
            product prices across multiple online retailers in a single
            location.
          </p>
        </li>
        <br />
        <li>
          <strong>Question 2:</strong> How do I add Product to Track?
          <p>
            Price Tracker page has an add button to add product to track, once
            clicked it will prompt for product name and number then this will
            generate a card with two buttons, edit and details and outer button
            to remove the product. Additional option to add websites to be
            tracked and details to show the price and name of the websites. The
            Details button will show the websites and prices on a table.
          </p>
        </li>
        <br />
        <li>
          <strong>Question 3:</strong> What is a Community page do?
          <p>
            Community page to provide product reviews of any product that was
            bought.
          </p>
        </li>
        <br />
        <li>
          <strong>Question 4:</strong> What is a Contact page have?
          <p>The page to send email to the owner of the page.</p>
        </li>        
      </ul>
      */}
      </div>

      <div
        className="price-tracker-contact-us-page"
      >
        <div>
          <br />
          <h1>Send us Questions, Comments or Request?</h1>
          <br />
          {/**<h2>Send us a message</h2>*/}
        </div>
        <div className="price-tracker-contact-us-page-form">
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

      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "1px",
        }}
      >
        <Link to="/">
          <Button style={{ marginRight: "5px", padding: "1px", gap: "1px" }}>
            Go to Main Page
          </Button>
        </Link>
        <Link to="/community">
          <Button style={{ padding: "1px", gap: "1px" }}>
            Go to Review Page
          </Button>
        </Link>
      </div>
    </>
  );
};

export default HelpPage;
