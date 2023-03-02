import React from "react";
import { Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";

export const CustomCard = ({ searchedMovie }) => {
  return (
    <Card style={{ width: "18rem", color: "black" }}>
      <Card.Img variant="top" src={searchedMovie?.Poster} />
      <Card.Body>
        <Card.Title className="text-center"> {searchedMovie?.Title}</Card.Title>
        <Card.Text> {searchedMovie?.Plot}</Card.Text>

        <div className="d-flex justify-content-between">
          <Button variant="warning">Happy</Button>
          <Button variant="info">Lazy</Button>
        </div>
        <div className="d-grid mt-3">
          <Button variant="danger"> Delete</Button>
        </div>
      </Card.Body>
    </Card>
  );
};
