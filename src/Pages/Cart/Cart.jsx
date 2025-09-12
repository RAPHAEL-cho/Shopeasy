import { Container, Row, Col, Button, Table, Alert } from "react-bootstrap";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cart, dispatch } = useCart();

  const total = cart.reduce(
    (sum, item) => sum + (Number(item.price) || 0) * item.quantity,
    0
  );

  if (cart.length === 0)
    return (
      <Container className="py-5">
        <Alert variant="info" className="text-center">
          Your cart is empty.
        </Alert>
      </Container>
    );

  return (
    <Container className="py-5">
      <h2 className="mb-4">Shopping Cart</h2>
      <Table responsive bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th width="120">Price</th>
            <th width="120">Quantity</th>
            <th width="120">Subtotal</th>
            <th width="80"></th>
          </tr>
        </thead>
        <tbody>
          {cart.map(item => (
            <tr key={item.id}>
              <td>
                <strong>{item.name}</strong>
                <div>
                  <img
                    src={item.image || "https://via.placeholder.com/60"}
                    alt={item.name}
                    style={{ width: 60, height: 60, objectFit: "cover" }}
                  />
                </div>
              </td>
              <td>${Number(item.price).toLocaleString()}</td>
              <td>
                <Button
                  size="sm"
                  variant="outline-secondary"
                  onClick={() => dispatch({ type: "DECREMENT", id: item.id })}
                  disabled={item.quantity === 1}
                >
                  -
                </Button>{" "}
                {item.quantity}{" "}
                <Button
                  size="sm"
                  variant="outline-secondary"
                  onClick={() => dispatch({ type: "INCREMENT", id: item.id })}
                >
                  +
                </Button>
              </td>
              <td>
                ${((Number(item.price) || 0) * item.quantity).toLocaleString(undefined, { minimumFractionDigits: 2 })}
              </td>
              <td>
                <Button
                  size="sm"
                  variant="danger"
                  onClick={() => dispatch({ type: "REMOVE", id: item.id })}
                >
                  Remove
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Row className="justify-content-end">
        <Col md={4}>
          <h4>
            Total: ${total.toLocaleString(undefined, { minimumFractionDigits: 2 })}
          </h4>
          <Button href="/payment" variant="primary" className="w-100 mt-2">
            Checkout
          </Button>
          <Button
            variant="outline-danger"
            className="w-100 mt-2"
            onClick={() => dispatch({ type: "CLEAR" })}
          >
            Clear Cart
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Cart;