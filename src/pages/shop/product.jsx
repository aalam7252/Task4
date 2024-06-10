import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { addToCart, cartItems } = useContext(ShopContext);

  const cartItemCount = cartItems[id];

  return (
    <div className="rounded-xl w-[300px] h-[350px] m-[100px] flex flex-col justify-center items-center text-center hover:ease-in hover:duration-1000 hover:cursor-pointer">
      <img className="w-[400px]" src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> ${price}</p>
      </div>
      <button className="bg-transparent border-2 border-solid border-black rounded-xl hover:text-white hover:cursor-pointer hover:bg-black p-1" onClick={() => addToCart(id)}>
        Add To Cart {cartItemCount > 0 && <> ({cartItemCount})</>}
      </button>
    </div>
  );
};
