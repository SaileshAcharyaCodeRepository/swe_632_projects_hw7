// Gemini AI assisted code

import { useTheme } from "../contexts/ThemeProvider";
import { useProductInfoContext } from "../contexts/ProductInfoProvider";

import React, { useState } from "react";
import { Modal, Button, Card, Table } from "react-bootstrap";

import PriceTrackerForm from "./PriceTrackerForm";

import "../styles/PriceTracker.css";
import "bootstrap/dist/css/bootstrap.min.css";

import temp from "../assets/temp_1.png";

const PriceTrackerCard = ({
  currItem,
  currID,
  currName,
  currNumber,
  currWebsites,
  currPrices,
}) => {
  const { theme } = useTheme();

  const [show, setShow] = useState(false);
  const handleCloseModal = () => setShow(false);
  const handleShowModal = () => setShow(true);
  const { products } = useProductInfoContext();

  return (
    <>
      <Card
        className={`price-tracker-card text-bg-${theme}`}
        style={{ width: "18rem" }}
      >
        <Card.Img
          variant="top"
          src={temp}
          width="100"
          height="100"
          alt="image"
        />
        <Card.Body>
          <Card.Title className="text-truncate" style={{ width: '200px' , overflow: 'hidden', textOverflow: 'ellipsis'}}>{currName}</Card.Title>
          <Card.Text className="text-truncate" style={{ width: '150px', overflow: 'hidden', textOverflow: 'ellipsis' }}>Mfr Num : {currNumber}</Card.Text>
          {/*
          console.log(
            "Card Body: ",
            currName,
            currNumber,
            typeof currNumber,
            currWebsites,
            typeof currWebsites,
            currPrices,
            typeof currPrices,
            "products : ",
            typeof products,
            products
          )
            */}
          {/*This is Modal Component to show Product Details*/}
          <Button
            className="details"
            variant="success"
            onClick={handleShowModal}
          >
            Details
          </Button>
          <Modal show={show} onHide={handleCloseModal} centered>
            <Modal.Header closeButton>
              <Modal.Title>Websites Tracked : {currName}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Table>
                <thead>
                  <tr>
                    <th>Websites</th>
                    <th>Prices</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    //console.log("currItem: ", currItem)
                  }
                  {currItem.websites.sort()
                    .filter((item) => item)
                    .map((item, index) => (
                      <tr key={index}>
                        <td>{item}</td>
                        <td>{Math.floor(Math.random() * (100 - 1 + 1)) + 1}</td>
                      </tr>
                    ))}
                </tbody>
              </Table>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={handleCloseModal}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
          {/*This is Modal Component to show Product Details*/}

          {/*This is Modal Component to edit Product Details*/}
          <PriceTrackerForm
            className="edit-info-modal"
            currItem={currItem}
            currID={currID}
            currName={currName}
            currNumber={currNumber}
            currWebsites={currWebsites}
            currPrices={currPrices}
          ></PriceTrackerForm>
          {/*This is Modal Component to edit Product Details*/}
        </Card.Body>
      </Card>
    </>
  );
};

export default PriceTrackerCard;
