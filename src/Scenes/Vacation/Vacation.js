import { IoFastFoodOutline } from "react-icons/io5";
import { RiServiceFill, RiHotelBedLine } from "react-icons/ri";
import { FaStreetView } from "react-icons/fa";
import { motion } from "framer-motion";

const Vacation = () => {
  return (
    <section className="my-[30px] max-h-full w-screen mx-auto flex flex-col justify-center items-center gap-6 md:gap-12">
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-xl font-bold font-KenokyLight md:text-2xl">
          <span className="text-HGold">BEST </span>HOTEL FOR YOUR VACATION
        </h2>
        <h4 className="py-2 capitalize flex flex-col justify-center items-center gap-0 text-sm font-[500]">
          Enjoy every step of the journey{" "}
          <span className="text-HGold">_____________</span>
        </h4>
      </div>
      <div className="p-8 w-screen flex flex-col justify-center items-center gap-14 lg:flex-row lg:p-4">
        <div className="w-[100%] flex flex-col justify-start items-center gap-14 lg:w-[50%] md:flex-row">
          {" "}
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 30 }}
            className="p-3 w-[80%] h-[48vh] peer flex flex-col justify-center items-center gap-1 rounded-lg goldShadow cursor-pointer sm:w-[65%] md:w-[50%] md:h-[38vh]"
          >
            <div className="h-[90px] w-[90px] object-cover rounded-full text-HGold flex justify-center items-center border-solid border-2 border-HGold text-[24px] peer-hover:text-black peer-hover:bg-HGold">
              <IoFastFoodOutline />
            </div>
            <h4 className="text-[24px] font-KenokyLight font-[500] flex flex-col justify-center items-center gap-2">
              Get Breakfast
              <span className="mt-[9px] text-[13px] text-center font-[250] text-sm md:text-xs capitalize">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, tempora.
              </span>
            </h4>
          </motion.div>
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 30 }}
            className="p-3 w-[80%] h-[48vh] peer flex flex-col justify-center items-center gap-1 rounded-lg goldShadow cursor-pointer sm:w-[65%] md:w-[50%] md:h-[38vh]"
          >
            <div className="h-[90px] w-[90px] object-cover rounded-full text-HGold flex justify-center items-center border-solid border-2 border-HGold text-[24px] hover:text-black hover:bg-HGold">
              <RiServiceFill />
            </div>
            <h4 className="text-[24px] font-KenokyLight font-[500] flex flex-col justify-center items-center gap-2">
              Friendly Service
              <span className="mt-[9px] text-[13px] text-center font-[250] text-sm md:text-xs capitalize">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, tempora.
              </span>
            </h4>
          </motion.div>
        </div>
        <div className="w-[100%] flex flex-col justify-start items-center gap-14 lg:w-[50%] md:flex-row">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 30 }}
            className="p-3 w-[80%] h-[48vh] peer flex flex-col justify-center items-center gap-1 rounded-lg goldShadow cursor-pointer sm:w-[65%] md:w-[50%] md:h-[38vh]"
          >
            <div className="h-[90px] w-[90px] object-cover rounded-full text-HGold flex justify-center items-center border-solid border-2 border-HGold text-[24px] hover:text-black hover:bg-HGold">
              <FaStreetView />
            </div>
            <h4 className="text-[24px] font-KenokyLight font-[500] flex flex-col justify-center items-center gap-2">
              Amazing View
              <span className="mt-[9px] text-[13px] text-center font-[250] text-sm md:text-xs capitalize">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, tempora.
              </span>
            </h4>
          </motion.div>
          <motion.div
            drag="x"
            dragConstraints={{ left: 30, right: 0 }}
            className="p-3 w-[80%] h-[48vh] peer flex flex-col justify-center items-center gap-1 rounded-lg goldShadow cursor-pointer sm:w-[65%] md:w-[50%] md:h-[38vh]"
          >
            <div className="h-[90px] w-[90px] object-cover rounded-full text-HGold flex justify-center items-center border-solid border-2 border-HGold text-[24px] hover:text-black hover:bg-HGold">
              <RiHotelBedLine />
            </div>
            <h4 className="text-[24px] font-KenokyLight font-[500] flex flex-col justify-center items-center gap-2">
              Cozy Room
              <span className="mt-[9px] text-[13px] text-center font-[250] text-sm md:text-xs capitalize">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Placeat, tempora.
              </span>
            </h4>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Vacation;
