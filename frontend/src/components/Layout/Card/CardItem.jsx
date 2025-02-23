import PropTypes from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../../Context/CartProvider";

const CardItem = ({cartItem}) => {
  const {removeFromCart} = useContext(CartContext);
  return (
    <tr className="cart-item">
      <td></td>
      <td className="cart-image">
        <img src={cartItem.img.singleImage} alt="" />
        <i className="bi bi-x delete-cart" onClick={() => removeFromCart(cartItem.id)}></i>
      </td>
      <td>{cartItem.name}</td>
      <td>$108.00</td>
      <td className="product-quantity">1</td>
      <td className="product-subtotal">$108.00</td>
    </tr>
  );
};

export default CardItem;

CardItem.propTypes = {
  cartItem : PropTypes.object
}