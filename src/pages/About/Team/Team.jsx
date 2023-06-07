import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper";
import { swiperContent } from "../../../DummyDb/DataB";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Team = () => {
  const [state, setState] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setState(swiperContent);
    }, 1000);
  }, []);

  return (
    <div className="w-screen max-h-max bg-primary2">
      <div className="w-full max-h-max flex justify-between items-center py-10 px-32 bg-transparent">
      {!!state?.length ? (
          <Swiper
            // install Swiper modules
            modules={[Navigation, Pagination, Autoplay, A11y]}
            loop={true}
            spaceBetween={50}
            slidesPerView={3}
            navigation={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: true,
            }}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {state.map((data, index) => (
              <SwiperSlide key={index}>
                <Card {...data}/>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <div className="text-center font-semibold text-secondary uppercase">LOADING...</div>
        )}
      </div>
    </div>
  );
};

const Card = ({ name, image, state }) => {
  return (
      <div className=" py-10  drop-shadow-lg relative mb-10">
        <div className=" bg-transparent mb-5">
          <img
            className="w-20 h-20 rounded-full mr-5 border border-primary2 object-cover"
            src={image}
            alt=""
          />
        </div>
        <div className=" bg-transparent flex items-center justify-center flex-col">
          <h3 className="bg-transparent">{name}</h3>
          <small className="bg-transparent">{state}</small>
        </div>
      </div>
  );
};

export default Team;
