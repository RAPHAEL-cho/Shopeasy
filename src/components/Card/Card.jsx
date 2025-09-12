import React from "react";
import { Button, Card } from "react-bootstrap";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product, image, name, description, price }) => {
  const { dispatch } = useCart();

  const handleAddToCart = () => {
    dispatch({ type: "ADD", product });
  };

  return (
    <Card className="h-100">
      <Card.Img variant="top" src={image} alt={name} style={{ objectFit: "cover", height: 200 }} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <h5 className="text-success">${price}</h5>
        <Button variant="primary" className="w-100 mt-2" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;