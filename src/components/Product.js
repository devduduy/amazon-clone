import React from "react";

import "./Product.css";
import { useStateValue } from "../StateProvider";

const Product = ({ id, title, price, rating, image }) => {
  const [{}, dispatch] = useStateValue();

  const addToCart = () => {
    // add item to cart
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id: id,
        title: title,
        rating: rating,
        price: price,
        image: image,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={`star-${i}`}>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt="product" />
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default Product;
