import React from "react";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import { CustomCard } from "./CustomCard";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

export const Display = () => {
  return (
    <div className="bg-black p-5 rounded shadow-lg mt-5">
      <div className="">
        <ButtonGroup aria-label="Basic example">
          <Button variant="primary">All</Button>
          <Button variant="warning">Happy</Button>
          <Button variant="info">Lazy</Button>
        </ButtonGroup>
      </div>
      <div className="py-3"> 0 Movies Found!</div>
      <hr />

      <Row>
        <Col>
          <CustomCard />
        </Col>
      </Row>
    </div>
  );
};
