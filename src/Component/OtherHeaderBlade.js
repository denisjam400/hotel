const OtherHeaderBlade = ({ paramName }) => {
  let newParamName = paramName.replace("/", "");

  return (
    <div className="h-[80vh] md:h-[70vh] w-[100%] bg-otherNavHeader bg-cover bg-center rounded-b-[54px] md:rounded-b-[74px]">
      <div className="h-[100%] w-[100%] backdrop-blur-[1.34px] rounded-b-[54px] md:rounded-b-[74px] flex justify-center items-center">
        <div className="bg-[#444444e1] flex flex-col justify-center items-center gap-3 w-[50%] md:w-[20%] rounded-xl px-4 py-9">
          <h1 className="text-HGold text-3xl uppercase">{newParamName}</h1>
          <div className="flex flex-row justify-center items-center gap-1">
            <a href="/" className="underline text-DGold capitalize">
              home
            </a>
            <h6 className="uppercase">/ {newParamName}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OtherHeaderBlade;
