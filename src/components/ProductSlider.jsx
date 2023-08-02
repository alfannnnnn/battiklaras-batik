import React from "react";
import { Link, useNavigate } from "react-router-dom";
import products from "../utils/products.js";

const ProductSlider = () => {
  const product = products.filter((res, index) => index < 3);
  const navigate = useNavigate();

  const handleClick = (id) => {
    window.scrollTo(0, 0);
    navigate(id);
  };

  return (
    <section className="w-full ">
      <div className="max-w-screen-xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between lg:mb-4 mb-2">
          <h1 className="text-sm lg:text-lg font-bold">Produk Lainnya</h1>
          <Link className="text-sm hover:border-b hover:border-black" to="/">
            Lihat Semua
          </Link>
        </div>
        <div className="grid grid-cols-3 lg:grid-cols-4 gap-2 lg:gap-4">
          {product.map((res, index) => (
            <div
              key={index}
              onClick={() => handleClick(`/${res.id}`)}
              className="flex flex-col items-center justify-center gap-1 mb-2 cursor-pointer"
            >
              <img src={res.thumbnail} alt="product" className="mb-2" />
              <h1 className="text-xs tracking-wider">{res.name}</h1>
              <p className="text-[10px]">{res.initialPrice}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSlider;
