import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const GalleryModal = ({
  clickedIMG,
  setClickedIMG,
  handleRotationRight,
  handleRotationLeft,
}) => {
  const handleClick = (e) => {
    if (e.target.classList.contains("dismiss")) {
      setClickedIMG(null);
    }
  };

  return (
    <div
      className="fixed top-0 right-0 w-screen h-screen flex justify-center items-center bg-[#333333e1] dismiss cursor-pointer"
      onClick={handleClick}
    >
      <img
        src={clickedIMG}
        alt=""
        className="w-[80%] h-[280px] md:w-[60%] lg:w-[40%]"
      />
      <h6
        className="absolute top-16 right-10 text-xl dismiss cursor-pointer"
        onClick={handleClick}
      >
        X
      </h6>
      <div
        className="absolute top-1/2 left-5 text-xl cursor-pointer"
        onClick={handleRotationLeft}
      >
        <AiOutlineArrowLeft />
      </div>
      <div
        className="absolute top-1/2 right-5 text-xl cursor-pointer"
        onClick={handleRotationRight}
      >
        <AiOutlineArrowRight />
      </div>
    </div>
  );
};

export default GalleryModal;
