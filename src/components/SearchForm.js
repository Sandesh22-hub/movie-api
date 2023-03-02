import React, { useRef } from "react";
import { Button } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { CustomCard } from "./CustomCard";
import { fetchHelper } from "../helper/fetchHelper";
import { useState } from "react";
import { Alert } from "react-bootstrap";

export const SearchForm = () => {
  const strRef = useRef("");
  const [searchedMovie, setSearchedMovie] = useState({});
  const [error, setError] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault(); //prevents website to reload

    error && setError(false);

    const str = strRef.current.value;
    const data = await fetchHelper(str);

    if (data.Response === "True") {
      setSearchedMovie(data);
    } else {
      setError(true);
    }
  };

  return (
    <div className="bg-black p-5 rounded shadow-lg">
      <Form onSubmit={handleOnSubmit}>
        <Row className="gap-1">
          <Col md="9">
            <Form.Control ref={strRef} placeholder="Search by title" />
          </Col>
          <Col>
            <div className="d-grid">
              <Button variant="warning" type="submit">
                Search Movie
              </Button>
            </div>
          </Col>
        </Row>
      </Form>
      <div className="d-flex justify-content-center mt-5">
        {error ? (
          <Alert variant="danger"> Movie not found! </Alert>
        ) : (
          <CustomCard searchedMovie={searchedMovie} />
        )}
      </div>
    </div>
  );
};
