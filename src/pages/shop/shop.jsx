import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";

export const Shop = () => {
  return (
    <div className="shop">
      <div className="mt-24 text-center text-[40px]">
        <h1>PedroTech Shop</h1>
      </div>

      <div className="w-[100%] h-auto grid grid-cols-3 place-items-center">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
