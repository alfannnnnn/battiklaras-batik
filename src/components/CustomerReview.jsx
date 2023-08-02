import React, { useEffect } from "react";
import star from "../assets/star.png";
import avatar from "../assets/avatar.png";

const CustomerReview = () => {
  return (
    <section className="w-full ">
      <div className="max-w-screen-xl mx-auto p-4">
        <div className="w-full flex flex-col items-start justify-center pb-24 gap-4 lg:gap-8">
          <h1 className="text-xl font-bold">REVIEW PELANGGAN</h1>
          <div className="w-full flex flex-col items-start border-t py-4 gap-4">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center justify-start gap-1">
                <img className="h-3" src={star} alt="stars" />
                <img className="h-3" src={star} alt="stars" />
                <img className="h-3" src={star} alt="stars" />
                <img className="h-3" src={star} alt="stars" />
                <img className="h-3" src={star} alt="stars" />
              </div>
              <p className="text-xs text-gray-600">31/07/2023</p>
            </div>
            <div className="flex items-center justify-start gap-2 lg:gap-4">
              <img className="h-8" src={avatar} alt="avatar" />
              <h1 className="text-md font-bold">Budio777</h1>
            </div>
            <p className="text-xs">
              "COD Area Wangon tetep free ongkir terimakasih seller🙏🏻"
            </p>
          </div>
          {/* Testimonials-2 */}
          <div className="w-full flex flex-col items-start border-t py-4 gap-4">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center justify-start gap-1">
                <img className="h-3" src={star} alt="stars" />
                <img className="h-3" src={star} alt="stars" />
                <img className="h-3" src={star} alt="stars" />
                <img className="h-3" src={star} alt="stars" />
                <img className="h-3" src={star} alt="stars" />
              </div>
              <p className="text-xs text-gray-600">29/07/2023</p>
            </div>
            <div className="flex items-center justify-start gap-2 lg:gap-4">
              <img className="h-8" src={avatar} alt="avatar" />
              <h1 className="text-md font-bold">hendianrr</h1>
            </div>
            <p className="text-xs">
              "Pengiriman cepat. Bagus banget tidak usah diragukan 👍👍👍"
            </p>
          </div>
          <div className="w-full flex flex-col items-start border-t py-4 gap-4">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center justify-start gap-1">
                <img className="h-3" src={star} alt="stars" />
                <img className="h-3" src={star} alt="stars" />
                <img className="h-3" src={star} alt="stars" />
                <img className="h-3" src={star} alt="stars" />
                <img className="h-3" src={star} alt="stars" />
              </div>
              <p className="text-xs text-gray-600">28/07/2023</p>
            </div>
            <div className="flex items-center justify-start gap-2 lg:gap-4">
              <img className="h-8" src={avatar} alt="avatar" />
              <h1 className="text-md font-bold">ferdi_fe</h1>
            </div>
            <p className="text-xs">
              "Puas banget sama bajunya. Untung masih kebagian promonya😁"
            </p>
          </div>
          <div className="w-full flex flex-col items-start border-t py-4 gap-4">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center justify-start gap-1">
                <img className="h-3" src={star} alt="stars" />
                <img className="h-3" src={star} alt="stars" />
                <img className="h-3" src={star} alt="stars" />
                <img className="h-3" src={star} alt="stars" />
                <img className="h-3" src={star} alt="stars" />
              </div>
              <p className="text-xs text-gray-600">27/07/2023</p>
            </div>
            <div className="flex items-center justify-start gap-2 lg:gap-4">
              <img className="h-8" src={avatar} alt="avatar" />
              <h1 className="text-md font-bold">zakiyyy</h1>
            </div>
            <p className="text-xs">
              "Seperti biasaa,, buagus bangettt.... Next order lagii makasih
              kak..."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerReview;
