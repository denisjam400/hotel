import { NewsINFO } from "../../Utils/Utils";

const NewzList = () => {
  return (
    <div className="my-12 flex w-full h-full flex-wrap justify-center items-center gap-10">
      {NewsINFO.map((Newz, index) => (
        <div
          key={index}
          className="max-h-full w-[95%] md:w-[35%] lg:w-[28%] flex flex-col rounded-xl bg-black shadow-xl justify-center items-start gap-3"
        >
          <img
            className="w-full h-[320px] rounded-xl"
            src={Newz.imgURL}
            alt=""
          />
          <div className="flex justify-start items-start gap-2 px-4">
            <h6 className="text-gray-400">{Newz.date}</h6>

            {Newz.hashTag.map((hash, index) => (
              <h6 key={index} className="text-DGold">
                #{hash.hash}
              </h6>
            ))}
          </div>
          <h4 className="text-2xl px-4 pb-5">{Newz.title}</h4>
        </div>
      ))}
    </div>
  );
};

export default NewzList;
