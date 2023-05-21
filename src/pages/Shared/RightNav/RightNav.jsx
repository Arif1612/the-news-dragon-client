import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../assets/bg.png";

const RightNav = () => {
  return (
    <div>
      <h2 className="mb-3">Login With</h2>
      <Button className="w-100 mb-2 " variant="outline-primary">
        <FaGoogle className="me-2" /> Login With Google
      </Button>
      <Button className="w-100" variant="outline-secondary">
        <FaGithub className="me-2" />
        Login With GitHub
      </Button>

      <div>
        <h2 className="mt-4 mb-4">Find Us On</h2>
        <ListGroup>
          <ListGroup.Item variant="primary">
            <FaFacebook className="me-2" /> Facebook
          </ListGroup.Item>
          <ListGroup.Item variant="secondary">
            <FaTwitter className="me-2" /> Twitter
          </ListGroup.Item>
          <ListGroup.Item variant="success">
            <FaInstagram className="me-2" /> Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div>
        <img src={bg} alt="" />
      </div>
    </div>
  );
};

export default RightNav;
