import React from "react";
import logo from "../assets/logo.png";

const ServicesSection = () => {
  return (
    <section className="w-full bg-gray-50 py-8 lg:py-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-center justify-center">
          <div className="max-w-screen-sm mx-auto px-8 flex flex-col items-center justify-center gap-8">
            <h1 className="font-bold text-lg lg:text-xl">
              Pesona Batik Laras Purwokerto
            </h1>
            <p className="text-sm lg:text-lg text-center">
              <span className="font-bold">Batik Laras Purwokerto</span>{" "}
              merupakan salah satu suplier batik terbesar di Purwokerto yang
              berdiri sejak tahun 2007. Batik Laras hadir dengan berbagai macam
              koleksi fashion seperti pakaian anak, pakaian wanita dan pakaian
              pria.
            </p>
            <img className="w-24 lg:w-28" src={logo} alt="logo" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
