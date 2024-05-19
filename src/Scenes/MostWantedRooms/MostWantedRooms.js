import { mostWantedRooms } from "../../Utils/Utils";

const MostWantedRooms = () => {
  return (
    <section className="my-7 w-screen max-h-max flex justify-center items-center flex-col">
      <div className="h-[80px] flex flex-col justify-center items-center">
        <h2 className="capitalize flex justify-center items-start gap-2 font-semibold text-2xl">
          <span className="text-DGold font-bold">Most</span>wanted room
        </h2>
        <h5 className="mt-[10px] capitalize flex flex-col justify-center items-center text-sm">
          Grab It fast to roomrius
          <span className="text-DGold">__________________</span>
        </h5>
      </div>

      <div className="m-7 w-full max-h-max flex flex-wrap justify-center items-center gap-16 md:gap-9 lg:gap-12">
        {mostWantedRooms.map((wantedRooms) => (
          <div
            className="w-[88%] md:w-[42%] lg:w-[28%] max-h-max bg-center bg-cover text-white rounded-[4px] smGoldShadow"
            key={wantedRooms.RoomID}
          >
            <img
              className="w-full h-[43vh] object-cover rounded-[4px]"
              src={wantedRooms.RoomIMG}
              alt=""
            />
            <div className="w-full p-3 flex flex-col justify-center items-start gap-4">
              <div className="w-full flex justify-between items-center font-KenokyLight">
                <h2 className="text-[22px] capitalize font-bold">
                  {wantedRooms.RoomName}
                </h2>
                <div className="flex justify-center items-center gap-2 text-HGold font-semibold">
                  <h3>{wantedRooms.RoomRating}k</h3>
                  <h4 className="font-extrabold text-[20px]">
                    {wantedRooms.RoomRatingIcon}
                  </h4>
                </div>
              </div>
              <h4 className="text-[15px] font-extralight">
                {wantedRooms.RoomRatingInfo}
              </h4>
              <div className="w-full flex justify-center items-center">
                <button className="w-[80%] cursor-pointer h-[30px] flex justify-center items-center border-[1px] border-solid border-DGold text-HGold bg-transparent rounded-[6px] hover:bg-DGold hover:text-white">
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MostWantedRooms;
