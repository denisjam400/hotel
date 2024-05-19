import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
import { TbChevronsLeft, TbChevronsRight } from "react-icons/tb";
import { Autoplay, Navigation, Pagination, A11y } from "swiper";
import { bannerList } from "../../Utils/Utils";

import "swiper/css/bundle";

const Banner = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <section>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.params.navigation.nextEl = navigationNextRef.current;
        }}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="h-[85vh] md:h-[80vh]"
      >
        {bannerList.map((bannerImg) => (
          <SwiperSlide key={`banner-${bannerImg.id}`}>
            <div className="absolute w-screen">
              <div className="absolute top-0 left-0 transgold w-screen h-[85vh] opacity-[0.09] md:[80vh]"></div>
              <img
                src={bannerImg.img}
                className="w-screen h-[85vh] object-cover md:[80vh]"
                alt="img"
              />
            </div>
          </SwiperSlide>
        ))}
        <div
          ref={navigationPrevRef}
          className="h-[8vh] w-[60px] absolute top-[40%] left-[25px] text-[50px] hidden justify-center items-center z-10 bg-HGold md:flex"
        >
          <TbChevronsLeft />
        </div>
        <div
          ref={navigationNextRef}
          className="h-[8vh] w-[60px] absolute top-[40%] right-[25px] text-[50px] hidden justify-center items-center z-10 bg-HGold md:flex"
        >
          <TbChevronsRight />
        </div>
        <div className="absolute top-[60%] left-0 w-full h-[16vh] z-20 flex justify-center items-center md:top-[73%]">
          <form className="absolute px-5 w-[80%] h-auto py-[20px] bg-defaultBlack flex flex-col justify-center items-center sm:w-[63%] sm:gap-6 md:flex-row md:gap-3 rounded-md">
            <div className="w-full flex flex-col justify-center items-center gap-3 sm:flex-row sm:gap-5 md:gap-3">
              <div className="w-[100%] flex flex-col justify-start items-baseline gap-1 sm:w-[50%]">
                <label>Check In</label>
                <input
                  type="date"
                  name=""
                  className="w-full h-[4vh] outline-none border-none rounded-sm text-black"
                />
              </div>
              <div className="w-[100%] flex flex-col justify-start items-baseline gap-1 sm:w-[50%]">
                <label>Check Out</label>
                <input
                  type="date"
                  name=""
                  className="w-full h-[4vh] outline-none border-none rounded-sm text-black"
                />
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center md:flex-row md:gap-3">
              <div className="w-[100%] flex flex-col justify-start items-baseline gap-1">
                <label>Adults</label>
                <input
                  type="number"
                  name=""
                  className="px-2 py-1 w-full h-[4vh] outline-none border-none rounded-sm text-black"
                />
              </div>
              <div className="w-[100%] flex flex-col justify-start items-baseline gap-1">
                <label>Children</label>
                <input
                  type="number"
                  name=""
                  className="px-2 py-1 w-full h-[4vh] outline-none border-none rounded-sm text-black"
                />
              </div>
            </div>
            <button
              className="mt-7 w-[100%] h-[5vh] rounded-[4px] border-none bg-DGold md:w-[18%] md:h-[4.3vh]"
              type="submit"
            >
              <h2 className="block md:hidden">Check Availability</h2>
              <h2 className="hidden md:block">Search</h2>
            </button>
          </form>
        </div>
      </Swiper>
    </section>
  );
};

export default Banner;
