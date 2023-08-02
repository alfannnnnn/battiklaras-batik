import slider from "../utils/slider.js";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Slider = () => {
  return (
    <div className="w-full relative z-10">
      <div className="max-w-screen-xl mx-auto p-1">
        <Swiper
          style={{
            "--swiper-pagination-color": "#fff",
          }}
          pagination={{
            dynamicBullets: true,
          }}
          slidesPerView={1}
          modules={[Pagination]}
          className="mySwiper"
        >
          {slider.map((slide, index) => (
            <SwiperSlide key={index}>
              <img src={slide.img} alt={slide.alt} className="w-full" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
