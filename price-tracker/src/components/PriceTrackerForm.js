// Gemini AI assisted code

import { useTheme } from "../contexts/ThemeProvider";
import { useProductInfoContext } from "../contexts/ProductInfoProvider";

import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

import "../styles/PriceTrackerForm.css";
import "bootstrap/dist/css/bootstrap.min.css";

const PriceTrackerForm = ({
  currItem,
  currID,
  currName,
  currNumber,
  currWebsites,
  currPrices,
}) => {
  const { theme } = useTheme();
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { currentItemName } = useState(currName);
  const { currentItemNumber } = useState(currNumber);

  const handleNameChange = (event) => {
    handleUpdateProductName(currID, event.target.value);
  };

  const handleNumberChange = (event) => {
    handleUpdateProductNumber(currID, event.target.value);
  };

  const {
    products,
    // handleAddProduct,
    // handleRemoveProduct,
    handleUpdateProductName,
    handleUpdateProductNumber,
    handleAddProductTrackedWebsites,
    handleRemoveProductTrackedWebsites,
  } = useProductInfoContext();

  //const [inputs, setInputs] = useState([]);
  const [inputs, setInputs] = useState(currWebsites);

  const handleAdd = () => {
    setInputs([...inputs, ""]);
  };

  const handleUpdate = (index, value) => {
    setInputs((prevItems) =>
      prevItems.map((item, i) => (i === index ? value : item))
    );
  };

  const handleRemove = (index) => {
    currWebsites = inputs.filter((_, i) => i !== index);
    console.log(currWebsites);
    setInputs(currWebsites);
    handleRemoveProductTrackedWebsites(currID, currWebsites);
    //console.log(inputs.filter((_, i) => i !== index));
  };

  /*
  const handleInputChange = (id, value) => {
    setInputs((prevInputs) =>
      prevInputs.map((input) => (input.id === id ? { ...input, value } : input))
    );
  };

  const addInput = () => {
    const newId = Date.now();
    setInputs([...inputs, { id: newId, value: "" }]);
  };

  const removeInput = (id) => {
    setInputs((prevInputs) => prevInputs.filter((input) => input.id !== id));
  };
  */

  const handleCloseAndSubmit = () => {
    const uniqueArray = [...new Set(inputs)];
    const newArray = uniqueArray.filter(Boolean);
    setInputs(newArray);

    handleAddProductTrackedWebsites(currID, newArray);
    handleClose();
  };

  return (
    <>
      <Button
        className="edit-info-button"
        variant="success"
        onClick={handleShow}
      >
        Edit Info
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit Info & Track Websites</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            {/**
            {console.log(
              "Form Body",
              "currName: ",
              currName,
              "currNumber: ",
              currNumber,
              "type of currNumber: ",
              typeof currNumber,
              "currWebsites: ",
              currWebsites,
              "typeof currWebsites: ",
              typeof currWebsites,
              "currPrices: ",
              currPrices,
              "typeof currPrices: ",
              typeof currPrices
            )} 
            */}
            <div>
              <Form.Group>
                <Form.Label className="text-center" style={{width: "100%"}}>Product Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder=" Enter Product Name"
                  value={currName}
                  onChange={handleNameChange}
                />
              </Form.Group>
              <Form.Group>
                <Form.Label className="text-center" style={{width: "100%"}}>Product Number</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Product Number"
                  value={currNumber}
                  onChange={handleNumberChange}
                />
                <br />
                <br />
              </Form.Group>
              {inputs.map((item, index) => (
                <div key={index}>
                  <Form.Group>
                    <Form.Label className="text-center" style={{width: "100%"}}>Tracked Website</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Website To Track"
                      value={item}
                      onChange={(e) => handleUpdate(index, e.target.value)}
                    />
                    <Button
                      className="edit-info-button"
                      variant="danger"
                      onClick={() => handleRemove(index)}
                    >
                      Remove
                    </Button>
                  </Form.Group>
                </div>
              ))}
            </div>
            <Button
              className="edit-info-button"
              variant="success"
              onClick={handleAdd}
            >
              Add New Website
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="edit-info-button"
            variant="success"
            onClick={handleCloseAndSubmit}
          >
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
export default PriceTrackerForm;
