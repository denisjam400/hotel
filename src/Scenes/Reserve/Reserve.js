import { BsCheckLg } from "react-icons/bs";

const Reserve = () => {
  return (
    <section className="mt-20 h-[55vh] flex flex-col justify-center items-center gap-9 font-KenokyLight md:h-[66vh]">
      <div className="w-[90%] rounded-2xl flex flex-col justify-center items-center imgBg text-center h-[50vh] md:w-[70%]">
        <h2 className="uppercase font-[900] text-[35px]">
          <span className="text-HGold">Easy </span>for reservation
        </h2>
        <h4 className="flex flex-col justify-center items-center font-[700]">
          Don't Worry, Stay Classy!{" "}
          <span className="font-extrabold text-HGold">______</span>
        </h4>
      </div>
      <div className="h-[16vh] w-[100%] hidden justify-center items-center gap-8 md:flex">
        <h3 className="w-[40%] h-[16vh] text-xl font-[700] hidden justify-center items-center gap-5 md:flex lg:w-[20%]">
          Check Availability
          <span className="h-[90px] w-[90px] rounded-full text-white flex justify-center items-center bg-HGold text-[26px] font-extrabold hover:text-HGold hover:bg-black hover:border-solid hover:border-2 hover:border-HGold">
            <BsCheckLg />
          </span>
        </h3>
        <h3 className="w-[40%] h-[16vh] text-xl font-[700] hidden justify-center items-center gap-5 lg:flex lg:w-[20%]">
          Reserve
          <span className="h-[90px] w-[90px] rounded-full text-white flex justify-center items-center bg-HGold text-[26px] font-extrabold hover:text-HGold hover:bg-black hover:border-solid hover:border-2 hover:border-HGold">
            <BsCheckLg />
          </span>
        </h3>
        <h3 className="w-[40%] h-[16vh] text-xl font-[700] hidden justify-center items-center gap-5 md:flex lg:w-[20%]">
          Explore
          <span className="h-[90px] w-[90px] rounded-full text-white flex justify-center items-center bg-HGold text-[26px] font-extrabold hover:text-HGold hover:bg-black hover:border-solid hover:border-2 hover:border-HGold">
            <BsCheckLg />
          </span>
        </h3>
      </div>
    </section>
  );
};

export default Reserve;
