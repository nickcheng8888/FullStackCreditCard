import React from "react";
import useForm from "./useForm";
import { Button, Form, Alert, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CreditCardForm.css";
import Cards from "react-credit-cards";
import "react-credit-cards/es/styles-compiled.css";
import { Link } from "react-router-dom"



function NewForm(){
  const { handleChange, handleChangeNumbers, handleFocus, handleSubmit, addUserID, values, errors } = useForm();
  return (
    <div className="container">
        <div className="creditCard">
          <Cards
            cvc={values.cardSecurityCode}
            expiry={values.cardExpiration}
            focused={values.focus}
            name={values.cardName}
            number={values.cardNumber}
          />
          </div>
      <div className="box justify-content-center align-items-center">
        <div className="formDiv">
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Control
              type="text"
              id="cardNumber"
              maxLength= "16"
              data-testid="cardNumber"
              name="cardNumber"
              placeholder="Card Number"
              value={values.cardNumber}
              onChange={handleChangeNumbers}
              onFocus={handleFocus}
              isValid={errors.cnumber}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="text"
              id="cardName"
              data-testid="cardName"
              name="cardName"
              placeholder="Cardholder Name"
              value={values.cardName}
              onChange={handleChange}
              onFocus={handleFocus}
              isValid={errors.cname}
            />
          </Form.Group>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                type="text"
                id="cardExpiration"
                  maxLength= "4"
                  data-testid="cardExpiration"
                  name="cardExpiration"
                  placeholder="Expiration Date"
                  value={values.cardExpiration}
                  onChange={handleChangeNumbers}
                  onFocus={handleFocus}
                  isValid={errors.cexp}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Control
                  type="text"
                  id="cardSecurityCode"
                  maxLength= "3"
                  data-testid="cardSecurityCode"
                  name="cardSecurityCode"
                  placeholder="Security Code"
                  value={values.cardSecurityCode}
                  onChange={handleChangeNumbers}
                  onFocus={handleFocus}
                  isValid={errors.ccvv}
                />
              </Form.Group>
            </Col>
          </Row>
          <Button
            size={"block"}
            data-testid="validateButton"
            id="validateButton"
            type="submit"
          >
            Validate
          </Button>
          <Link to="/getCard" className="btn btn-primary w-100 mt-3">
            Digital Wallet
          </Link>
        </Form>
        </div>
        <Alert
          id="alertMessage"
          data-testid="alertMessage"
          variant={errors.variant}
          show={errors.show}
        >
          {errors.message}
        </Alert>{" "}
      </div>
    </div>
  );

};

export default NewForm;
