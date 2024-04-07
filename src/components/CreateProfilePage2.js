import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CardComponent from "./CardComponent";

const cardImages = [
  "https://i.postimg.cc/6q962DVd/card1.png",
  "https://i.postimg.cc/wMGKqPwx/card2.png",
  "https://i.postimg.cc/sx18Nmsk/card3.png",
];

const headings = [
  "I'm a designer looking to share my work",
  "I'm looking to hire a designer",
  "I'm looking for design inspiration",
];

const contents = [
  "Showcase your portfolio and connect with fellow creatives.",
  "Find the perfect designer for your project.",
  "Get inspired by innovative design ideas and trends.",
];

export default function CreateProfilePage2() {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  const handleCardClick = (cardIndex) => {
    setSelectedCard((prevSelectedCard) => {
      if (prevSelectedCard === cardIndex) {
        return null;
      } else {
        return cardIndex;
      }
    });
  };

  const handleFinish = () => {
    // Navigate to the next page
    navigate("/home");
  };

  return (
    <div style={{ minHeight: "100vh", position: "relative" }}>
      <Container>
        <Row>
          <div
            className="align-items-start top-0 start-0 mt-3 ml-3 logo"
            style={{ color: "#EA4B8B", fontWeight: "bold", fontSize: "40px" }}
          >
            Project
          </div>
        </Row>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={10} lg={8}>
            <header>
              <h2 className="text-center">What brings you to this project?</h2>
              <p className="mt-2 text-center" style={{ fontSize: "14px" }}>
                Select the options that best describe you. Don't worry, you can
                explore other options later.
              </p>
            </header>
          </Col>
          <Row className="mt-0">
            {cardImages.map((imageUrl, index) => (
              <Col key={index} xs={12} sm={8} md={4} className="mb-3">
                <CardComponent
                  imageUrl={imageUrl}
                  heading={headings[index]}
                  content={contents[index]}
                  isSelected={selectedCard === index}
                  handleCardClick={() => handleCardClick(index)}
                />
              </Col>
            ))}
          </Row>
        </Row>
      </Container>
      <div className="d-flex justify-content-center mt-3">
        <Button
          style={{
            backgroundColor: "#EA4B8B",
            paddingLeft: "40px",
            paddingRight: "40px",
            border: "none",
          }}
          onClick={handleFinish}
        >
          Finish
        </Button>
      </div>
    </div>
  );
}
