import React from "react";
import Navbar from "../components/Navbar";
import ProductDetail from "../components/ProductDetail";
import CustomerReview from "../components/CustomerReview";
import ProductSlider from "../components/ProductSlider";

const DetailPage = () => {
  return (
    <>
      <Navbar />
      <ProductDetail />
      <ProductSlider />
      <CustomerReview />
    </>
  );
};

export default DetailPage;
