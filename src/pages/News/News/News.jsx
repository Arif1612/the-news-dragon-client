import React from "react";
import { Button, Card } from "react-bootstrap";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import EditorInsides from "./EditorInsides/EditorInsides";

const News = () => {
  const news = useLoaderData();
  const { title, details, _id, image_url, category_id } = news;

  return (
    <div>
      <Card style={{}}>
        <Card.Img variant="top" src={image_url} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{details}</Card.Text>
          <Link to={`/category/${category_id}`}>
            <Button variant="primary">
              {" "}
              <FaArrowLeft></FaArrowLeft> All news in this category
            </Button>
          </Link>
        </Card.Body>
      </Card>

      <EditorInsides></EditorInsides>
    </div>
  );
};

export default News;
