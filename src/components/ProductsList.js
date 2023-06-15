import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "./style/Cards.css";

const ProductsList = ({ addToCart }) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products?limit=16").then((response) => {
      setProducts(response.data);
    }).catch(error => {
      setError(error);
    });
  }, []);

  return (
    <div className="ui container">
      {!error ? (
        <div className="ui four column grid">
          {products.map(product => (
            <div className="column" key={product.id}>
              <div className="ui fluid card cards-image">
                <div className="images cards-image">
                  <img className="ui centered image" src={product.image} alt={product.title} />
                </div>
                <div className="content">
                  <p className="title">{product.title}</p>
                  <div className="ui label">
                    $ {product.price}
                  </div>
                </div>
                <div className="ui one buttons">
                  <button
                    onClick={() => addToCart(product)}
                    className="ui orange button"
                  >
                    <i className="cart plus icon"></i>
                    Add To Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : <p>Unable to get response from api. error: {error.code}</p>
      }
    </div >
  )
}

export default ProductsList;