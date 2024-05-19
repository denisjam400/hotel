import AvailableRooms from "../../Scenes/AvailableRooms/AvailableRooms";
import Banner from "../../Scenes/Banner/Banner";
import MostWantedRooms from "../../Scenes/MostWantedRooms/MostWantedRooms";
import Newsletter from "../../Scenes/Newsletter/Newsletter";
import Reserve from "../../Scenes/Reserve/Reserve";
import Testimonials from "../../Scenes/Testimonials/Testimonials";
import Vacation from "../../Scenes/Vacation/Vacation";

const Body = () => {
  return (
    <>
      <Banner />
      <Vacation />
      <Reserve />
      <AvailableRooms />
      <MostWantedRooms />
      <Testimonials />
      <Newsletter />
    </>
  );
};

export default Body;
