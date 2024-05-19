import { hotelListing as container } from "../../Utils/Utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { useState, useEffect } from "react";

const AvailableRooms = () => {
  const [isMobile, setIsMobile] = useState(false);

  // const myComFunc = () => {
  const sliderSlides = {
    sliderSlideCss: {
      width: "min-w-[50%]",
    },
  };
  // };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 600px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <section
      className="w-full h-[100vh] pt-4 flex flex-col items-end
     gap-4"
    >
      <div className="h-[9vh] w-full flex flex-col justify-center items-center gap-0">
        <h1 className="h-[40%] text-xl md:text-2xl font-KenokyLight font-bold">
          Available Rooms
        </h1>
        <h6 className="h-[25%] flex justify-center items-center gap-3 text-[28px] text-HGold">
          <strong className={`text-2xl flex justify-center items-center`}>
            <AiFillStar />
            <AiFillStar />
          </strong>

          {isMobile ? (
            <span className=""> ___________________</span>
          ) : (
            <span className="letterSpacingNeg">
              {" "}
              -----------------------------
            </span>
          )}

          <strong className={`text-2xl flex justify-center items-center`}>
            <AiFillStar />
            <AiFillStar />
          </strong>
        </h6>
      </div>
      <div className="w-full h-[85vh] flex justify-center items-center">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          slidesPerView={3}
          pagination={{ clickable: true }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          watchSlidesProgress={true}
          modules={[EffectCoverflow, Pagination]}
          className="w-full h-[76vh] lg:h-[80vh]"
        >
          {container.map((rooms, index) => (
            <SwiperSlide
              key={index}
              className={`bg-center bg-cover rounded-[14px] smGoldShadow
             max-h-[89%]`}
              // style={({ isVisible }) => "max-width: [50%]"}
            >
              <div>
                <img
                  className="w-full h-[39vh] md:h-[43vh] object-cover rounded-[14px]"
                  src={rooms.image}
                  alt="rooms_image"
                />
                <div className="flex justify-start items-start rounded-[4px] rounded-tr-[14px] w-[35%] absolute top-0 right-0 h-[5vh] z-20 priceBanner outline-none lg:w-[17%]">
                  <h5 className="h-full w-full text-[15px] lg:text-[18px] px-1">
                    ${rooms.price}
                  </h5>
                </div>
              </div>
              <div className="px-4 py-2">
                <h2 className="sm:text-lg md:text-xl font-bold flex justify-between items-center lg:text-2xl font-KenokyLight lg:font-extrabold">
                  {rooms.name}
                  <span className="flex justify-center items-center gap-1 sm:text-sm lg:gap-3 md:text-base lg:text-base text-HGold">
                    <div>{rooms.rating}k</div>
                    {isMobile ? (
                      <div>
                        <AiFillStar />
                      </div>
                    ) : (
                      <div className="flex justify-center items-center gap-1">
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiFillStar />
                        <AiOutlineStar />
                      </div>
                    )}{" "}
                  </span>
                </h2>
                <h4 className="py-2 md:py-2 lg:py-4">
                  Status: <span className="text-HGold">Available</span>
                </h4>
                <div className="w-full flex justify-center items-center">
                  <div className="w-[85%] lg:w-[60%] cursor-pointer h-[30px] border-none flex justify-center items-center bg-DGold text-white rounded-[6px]">
                    <button>Book Now</button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default AvailableRooms;
