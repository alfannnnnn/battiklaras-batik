import React, { useEffect, useState } from "react";
import products from "../utils/products.js";
import { Link, useParams } from "react-router-dom";
import star from "../assets/star.png";

import whatsapp2 from "../assets/whatsapp-2.png";
import shopee2 from "../assets/shopee-2.png";
import tokped2 from "../assets/tokped-2.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find((res) => res.id === id);
  const { images, colors, sizes } = product;

  const [productMessage, setProductMessage] = useState("");

  useEffect(() => {
    setProductMessage(product.name, id);
  }, []);

  const phoneNumber = "62882008983907";
  const message = `Hello kak, Aku mau memesan ${productMessage} ${id}. Apakah masih tersedia kak?`;

  const handleWhatsapp = () => {
    window.open(
      `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`
    );
  };

  return (
    <section className="w-full">
      <div className="max-w-screen-xl mx-auto lg:p-4">
        <div className="text-gray-600 body-font overflow-hidden">
          <div className="container lg:px-5 mx-auto">
            <div className="grid items-start grid-cols-1 lg:grid-cols-2">
              <div className="flex w-full">
                <Swiper
                  style={{
                    "--swiper-pagination-color": "#000",
                  }}
                  pagination={{
                    dynamicBullets: true,
                  }}
                  slidesPerView={1}
                  modules={[Autoplay, Pagination]}
                  className="mySwiper pb-8"
                >
                  {images.map((image, index) => (
                    <SwiperSlide key={index}>
                      <img
                        alt="product"
                        className="w-full lg:w-10/12 mx-auto"
                        src={image}
                      />
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="px-4 w-full my-4 flex flex-col items-start justify-center lg:items-start lg:justify-start gap-1 lg:gap-2">
                <div className="flex flex-col gap-2 lg:gap-4">
                  <h1 className="text-xl text-black font-bold tracking-widest">
                    {product.name}
                  </h1>
                  <div className="flex flex-col lg:flex-row items-start justify-start gap-2 lg:gap-4">
                    <div className="flex items-center justify-start gap-1">
                      <img className="h-4" src={star} alt="stars" />
                      <img className="h-4" src={star} alt="stars" />
                      <img className="h-4" src={star} alt="stars" />
                      <img className="h-4" src={star} alt="stars" />
                      <img className="h-4" src={star} alt="stars" />
                    </div>
                    <p className="text-md">{product.review} reviews</p>
                  </div>
                </div>
                <p className="text-red-700 font-bold my-4">
                  {product.sales} terjual 🔥
                </p>
                <div className="flex flex-col items-start justify-center lg:items-start lg:justify-start gap-1 lg:gap-2">
                  <div className="flex gap-4">
                    <h1 className="text-lg text-black">
                      {product.initialPrice}
                    </h1>
                  </div>
                  <p className="text-[10px]">Gratis ongkir & bisa COD</p>
                </div>
                <div className="w-full flex flex-col items-start justify-start mt-8 py-8 border-t gap-2 lg:gap-4 ">
                  <div className="flex flex-col gap-2 lg:gap-4">
                    <p className="text-xs text-black font-semibold">Warna</p>
                    <div className="flex gap-4">
                      {colors.map((color, index) => (
                        <button
                          key={index}
                          className="py-2 px-4 text-black border border-black text-sm rounded-lg hover:bg-black hover:text-white"
                        >
                          {color}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 lg:gap-4">
                  <p className="text-xs text-black font-semibold">Ukuran</p>
                  <div className="flex flex-wrap gap-2 lg:gap-4">
                    {sizes.map((size, index) => (
                      <button
                        key={index}
                        className="py-2 px-4 border text-xs lg:text-lg text-black border-black hover:bg-black hover:text-white rounded-lg"
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="w-full flex flex-col items-start justify-start mt-8 pt-8 border-t gap-2 lg:gap-4 ">
                  <p className="text-sm text-black">
                    Jenis : Kemeja Batik {product.categories} <br /> Model :{" "}
                    {product.categories} <br /> Bahan : Katun <br />
                    <br />
                    Bahan Sangat Nyaman Dan Lembut <br /> (Tidak Tebal/Tipis
                    Karena Soft Bisa Melar/Stretch). Menggunakan Resleting,
                    Kancing Stud Button.
                  </p>
                  <div className="w-full flex justify-center items-center fixed bottom-0 left-0 bg-white py-4 px-4  border-t z-50">
                    <div className="flex w-full lg:w-6/12 mx-auto gap-2">
                      <div
                        onClick={handleWhatsapp}
                        className="text-white bg-black p-3 rounded-md hover:text-gray-300 w-8/12 z-40 flex items-center justify-center"
                      >
                        <div className="flex items-center justify-center gap-2">
                          <img className="h-6" src={whatsapp2} alt="whatsapp" />
                          <h1>Beli Sekarang</h1>
                        </div>
                      </div>
                      <Link
                        to="https://shopee.co.id/batiklaras.id?page=0&shopCollection=244805503"
                        className="text-white bg-black p-3 rounded-md hover:text-gray-300 w-2/12 z-40 flex items-center justify-center"
                      >
                        <img className="h-6" src={shopee2} alt="shopee" />
                      </Link>
                      <Link
                        to="https://www.tokopedia.com/batik-laras?source=universe&st=product"
                        className="text-white bg-black p-3 rounded-md hover:text-gray-300 w-2/12 z-40 flex items-center justify-center"
                      >
                        <img className="h-6" src={tokped2} alt="tokped" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
