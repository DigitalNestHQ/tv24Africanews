import React from "react";
import { Form, InputGroup, FormControl, Button } from "react-bootstrap";
import LogoRed from "../../../assets/images/100 x100 main.png";
import "./subscribe.css"

const subscribe = () => {
  return (
    <div classnames="bg-white pt-3 pb-3 mt-4 mb-4">
      <div className="row container-fluid">
        <div className="col-sm-3 sub-logo mb-3">
          <img src={LogoRed} alt="Logo sub-logo" />
        </div>
        <div className="col-sm-3 mb-3"></div>
        <div className="col-sm-6 mb-3">
          <Form action="" method="post" className="subscribe-form mt-4">
            <InputGroup className="inpt">
              <FormControl
                className="sb-cntrl p-4"
                placeholder="Your Email"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <InputGroup.Append className="btn-sbmt">
                <Button className="sub-btn">SUBSCRIBE</Button>
              </InputGroup.Append>
            </InputGroup>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default subscribe;
