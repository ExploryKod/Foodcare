import {useContext} from "react";
import {CartContext} from "../context/cart.context";
import { IconContext } from "react-icons";
import { RiDeleteBin6Line }from "react-icons/ri";
import { Tooltip } from "../components/tooltip.jsx";

const CartSummary = ({key, cartItem}) => {

    const { id, product_name, category_id, product_image_url, product_price, quantity } = cartItem;
    const {  removeItemFromCart } = useContext(CartContext);

    const removeProductFromCart = () => removeItemFromCart(cartItem);

    const imageUrl = product_image_url ? `${process.env.REACT_APP_API_URL}/uploads/${product_image_url}.jpeg` : "../assets/img/products/generic_food.jpg";
    const price = parseFloat(product_price) * quantity;

    return (
        <div className="body-row">
            <div className="table-row__image">
               <img src={imageUrl} alt={product_name} />
            </div>
            <div className="table-row__item-name">
                <span>CF-{category_id}-{id} {product_name ? product_name : "Pas de nom"}</span>
            </div>
            <div className="table-row__quantity">{quantity}</div>
            <div className="table-row__price">{price}</div>
            <div className={"table-row__actions"}>
                <Tooltip content="Supprimer" direction="top">
                    <IconContext.Provider value={{ color: "#de392a", className: "trash-icon"}}>
                        <div>
                            <button title="delete room" type="button" className="btn-reset"  onClick={removeProductFromCart}>
                                <RiDeleteBin6Line className={"trash-icon"} />
                            </button>
                        </div>
                    </IconContext.Provider>
                </Tooltip>
            </div>
        </div>
    );

}

export default CartSummary;