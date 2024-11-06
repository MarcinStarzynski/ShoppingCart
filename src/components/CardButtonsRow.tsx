import { Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
type CardButtonsRowProps = {
  id: number;
};

export function CardButtonsRow({ id }: CardButtonsRowProps) {
  const {
    getItemQuantity,
    increaseItemQuantity,
    decreaseItemQuantity,
    removeFromCart,
  } = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <>
      {quantity === 0 ? (
        <Button className="w-100" onClick={() => increaseItemQuantity(id)}>
          + Add to Cart
        </Button>
      ) : (
        <div
          className="d-flex align-items-center flex-column"
          style={{ gap: ".5rem" }}
        >
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ gap: ".5rem" }}
          >
            <Button onClick={() => decreaseItemQuantity(id)}>-</Button>
            <div>
              <span className="fs-3">{quantity}</span> in cart
            </div>
            <Button onClick={() => increaseItemQuantity(id)}>+</Button>
          </div>
          <Button variant="danger" size="sm" onClick={() => removeFromCart(id)}>
            Remove
          </Button>
        </div>
      )}
    </>
  );
}
