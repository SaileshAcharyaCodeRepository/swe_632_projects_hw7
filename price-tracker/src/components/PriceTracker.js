// Gemini AI assisted code

import React, { useState } from "react";
// import { Button, Form, Nav, Navbar, Container } from "react-bootstrap";
import { Button, Toast, ToastContainer } from "react-bootstrap";

import { Link } from "react-router-dom";

import { useTheme } from "../contexts/ThemeProvider";
import { useProductInfoContext } from "../contexts/ProductInfoProvider";

import PriceTrackerCard from "./PriceTrackerCard";

import "../styles/PriceTracker.css";
import "../styles/PriceTrackerThemeButton.css";
import "bootstrap/dist/css/bootstrap.min.css";

//import temp from "../assets/temp_1.png";
import PriceTrackerPromptModal from "./PriceTrackerPromptModal";

function PriceTracker() {
  const { theme } = useTheme();

  const { products, handleAddProduct, handleRemoveProduct } =
    useProductInfoContext();

  const [showToastSuccess, setShowToastSuccess] = useState(false);
  const toggleShowToastSuccess = () => setShowToastSuccess(!showToastSuccess);

  /** Toast to show successful removal of entry */
  const handleRemovalOfItem = (id) => {
    handleRemoveProduct(id);
    setShowToastSuccess(true);
  };
  /** Toast to show successful removal of entry */

  /** Prompt To Get Initial Info About Products */
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const handleOpenModal = () => {
    //console.log("Handle Open:", modalIsOpen);
    setModalIsOpen(true);
  };
  const handleCloseModal = () => {
    setModalIsOpen(false);
  };
  const handleSubmit = (inputName, inputNumber, inputWebsite) => {
    // Do something with the input value
    /*
    console.log(
      "Submitted Product name number input:",
      inputName,
      inputNumber,
      inputWebsite
    );
    */
    handleAddProduct(inputName, inputNumber, inputWebsite);
  };
  /** Prompt To Get Initial Info About Products */

  return (
    <div>
      {/** Theme Toggle */}
      {/**
       <Form className={theme}>
        <Form.Check // prettier-ignore
          type="switch"
          id="custom-switch"
          label={theme}
          onClick={toggleTheme}
        />
      </Form> 
      */}
      {/** Theme Toggle */}

      {/** Nav Bar */}
      {/**
      <Navbar bg={theme} data-bs-theme={theme}>
        <Container>
          <Navbar.Brand href="#home">Price Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/community">Community</Nav.Link>
            <Nav.Link href="/contactus">Contact US</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      */}
      {/** Nav Bar */}

      {/** Add Button for Products To Track */}
      <Button className="add-card" variant="success" onClick={handleOpenModal}>
        Add Item
      </Button>
      {/** Add Products for Products To Track */}

      {/** Prompt To Get Initial Info About Products */}
      <PriceTrackerPromptModal
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
      ></PriceTrackerPromptModal>
      {/** Prompt To Get Initial Info About Products */}

      {/** Add Products Dynamically To Track */}
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {/* {console.log(typeof products)} */}
        {products.map((item) => (
          <div key={item.id}>
            {/*
            console.log(
              typeof products,
              "in loop: ",
              typeof item,
              item.id,
              item.name,
              item.number
            )
            */}
            {/*console.log(item.id, products.name, products.number)} */}
            <PriceTrackerCard
              currItem={item}
              currID={item.id}
              currName={item.name}
              currNumber={item.number}
              currWebsites={item.websites}
              currPrices={item.prices}
            ></PriceTrackerCard>
            <Button
              className="remove-card"
              variant="danger"
              onClick={() => handleRemovalOfItem(item.id)}
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
      {/** Add Products Dynamically To Track */}

      {/** Add Products To Track */}

      {/*This is Toast Component to show successful removal of entry*/}
      <ToastContainer className="p-3" position="bottom-center">
        <Toast
          className="toast-center"
          show={showToastSuccess}
          onClose={toggleShowToastSuccess}
          delay={3000}
          autohide={true}
          bg="warning"
        >
          <Toast.Body className={"text-white"}>
            Product Removed, Successfully
          </Toast.Body>
        </Toast>
      </ToastContainer>
      {/*This is Toast Component to show successful removal of entry*/}

      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          padding: "1px",
        }}
      >
        <Link to="/community">
          <Button style={{ marginRight: "5px", padding: "1px", gap: "1px" }}>
            Go to Review Page
          </Button>
        </Link>
        <Link to="/help">
          <Button style={{ padding: "1px", gap: "1px" }}>
            Go to Help Page
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default PriceTracker;
