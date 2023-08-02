import React from "react";
import { useNavigate } from "react-router-dom";
import products from "../utils/products.js";
import star from "../assets/star.png";

const ProductContainer = () => {
  const navigate = useNavigate();
  const product = products.filter((product) => product.categories === "Korpri");
  const handleClick = (id) => {
    window.scrollTo(0, 0);
    navigate(id);
  };

  return (
    <section className="w-full">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex flex-col gap-6">
          <h1 className="text-lg font-bold text-center">BATIK KORPRI</h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-4">
            {product.map((res, index) => (
              <div
                key={index}
                onClick={() => handleClick(res.id)}
                className="flex flex-col items-center justify-center gap-1 mb-2 cursor-pointer"
              >
                <img src={res.thumbnail} alt="product" className="mb-2" />
                <h1 className="text-md tracking-wider">{res.name}</h1>
                <div className="w-full flex items-start justify-center gap-2">
                  <div className="flex h-3 gap-[2px]">
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                    <img src={star} alt="star" />
                  </div>
                  <p className="text-xs">{res.review} reviews</p>
                </div>
                <p className="text-xs">{res.initialPrice}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductContainer;
