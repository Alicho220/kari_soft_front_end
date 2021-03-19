import React, { useState } from "react";
import { VerificationDiv } from "./style";
import verification from "../../../assets/verification.png";
import verified from "../../../assets/verified.png";
import Modal from "react-modal";
import Button from "react-bootstrap/Button";

function Verification() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <VerificationDiv>
      <div className="inner-container">
        <div className="main-content row">
          <div className="left-side-div col-md-6">
            <img src={verification} alt="" />
          </div>
          <div className="right-side-div pt-5 col-md-5">
            <h3>
              Please enter the six(6) digit OTP <br />
              sent to your registered <br />
              phone number
            </h3>
            <button variant="secondary" onClick={handleShow}>
              Verify
            </button>
          </div>
          <div className="otp-div">
            <p>
              Didn't get OTP? <span>Resend</span>
            </p>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </VerificationDiv>
  );
}

export default Verification;
