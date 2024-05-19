import { Testimonies } from "../../Utils/Utils";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Testimonials = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <section className="h-[80vh] w-full flex flex-col justify-center items-center gap-4">
      <h2 className="capitalize h-[9%] flex justify-center items-center gap-2 font-semibold text-2xl">
        Our
        <span className="text-DGold font-bold">Royal</span> Testimonial
      </h2>

      <div className="w-full h-[75%]">
        <Carousel
          swipeable={true}
          draggable={true}
          transitionDuration={2000}
          showDots={true}
          arrows={false}
          autoPlay={true}
          autoPlaySpeed={3000}
          infinite={true}
          className="h-full flex justify-center items-center gap-5"
          responsive={responsive}
        >
          {Testimonies.map((testy) => {
            return (
              <div
                key={testy.id}
                className="w-screen h-full flex justify-center items-start"
              >
                <div className="w-full h-full pt-2 pb-1 flex flex-col justify-center items-center gap-4">
                  <div className="w-[43%] h-[43%] md:w-[22%] md:h-[40%]">
                    <img
                      src={testy.IMG}
                      alt=""
                      className="w-full h-full rounded-[50%]"
                    />
                  </div>
                  <h4 className="w-[90%] text-center">{testy.testimony}</h4>
                  <h5>- {testy.testimonyNames} -</h5>
                </div>
              </div>
            );
          })}
        </Carousel>
      </div>
    </section>
  );
};

export default Testimonials;
