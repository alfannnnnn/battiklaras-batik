import React from "react";
import shipping from "../assets/shipping.png";
import cod from "../assets/cod.png";
import promo from "../assets/promo.png";
import fast from "../assets/fast.png";

const Features = () => {
  return (
    <section className="w-full bg-gray-50 py-8 lg:py-16">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-xl text-center">
            Mengapa Belanja Di Batik Laras Purwokerto?
          </h1>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 px-2 py-8">
            <div className="bg-white rounded-xl p-2 lg:p-4 hover:shadow-lg cursor-pointer">
              <div className="flex flex-col items-center justify-center gap-1 lg:gap-2 py-2 text-center">
                <img className="h-5 lg-h-10" src={shipping} alt="icon" />
                <h1 className="font-bold text-xs lg:text-xl">Gratis Ongkir</h1>
                <p className="text-[8px] lg:text-xs">
                  Nikmati Gratis Ongkir Untukmu yang di Area Purwokerto
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-2 lg:p-4 hover:shadow-lg cursor-pointer">
              <div className="flex flex-col items-center justify-center gap-1 lg:gap-2 py-2 text-center">
                <img className="h-5 lg-h-10" src={cod} alt="icon" />
                <h1 className="font-bold text-xs lg:text-xl">Pembayaran COD</h1>
                <p className="text-[8px] lg:text-xs">
                  Bisa COD untuk kamu yang di area Purwokerto
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-2 lg:p-4 hover:shadow-lg cursor-pointer">
              <div className="flex flex-col items-center justify-center gap-1 lg:gap-2 py-2 text-center">
                <img className="h-5 lg-h-10" src={promo} alt="icon" />
                <h1 className="font-bold text-xs lg:text-xl">Banyak Promo</h1>
                <p className="text-[8px] lg:text-xs">
                  Berbagai promo menarik spesial hanya untukmu
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl p-2 lg:p-4 hover:shadow-lg cursor-pointer">
              <div className="flex flex-col items-center justify-center gap-1 lg:gap-2 py-2 text-center">
                <img className="h-5 lg-h-10" src={fast} alt="icon" />
                <h1 className="font-bold text-xs lg:text-xl">
                  Admin Fast Response
                </h1>
                <p className="text-[8px] lg:text-xs">
                  Pelayanan yang cepat untuk pengalaman belanjamu yang lebih
                  baik
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
