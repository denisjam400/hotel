import { useState } from "react";
import { GalleryData } from "../../Utils/Utils";
import GalleryModal from "../../Component/GalleryModal";
import OtherHeaderBlade from "../../Component/OtherHeaderBlade";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [clickedIMG, setClickedIMG] = useState(null);

  const paramName = window.location.pathname;

  const handleClick = (data, index) => {
    setClickedIMG(data.IMG);
    setCurrentIndex(index);
    console.log(index);
  };

  const handleRotationRight = () => {
    const totalLength = GalleryData.length;
    const newIndex = currentIndex + 1;
    console.log(newIndex);

    if (currentIndex >= totalLength) {
      setCurrentIndex(0);
      console.log(currentIndex);
      const newURL = GalleryData[0].IMG;
      setClickedIMG(newURL);
      console.log(newURL);
      return;
    }
    console.log(newIndex);

    const newURL = GalleryData.filter((item) => item.id === newIndex);
    console.log(newURL);
    const newIMG = newURL[0].IMG;
    setClickedIMG(newIMG);
    setCurrentIndex(newIndex);
  };

  const handleRotationLeft = () => {
    const totalLength = GalleryData.length;
    const newIndex = currentIndex - 1;

    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newURL = GalleryData[totalLength - 1].IMG;
      setClickedIMG(newURL);
      return;
    }

    const newURL = GalleryData.filter((item) => item.id === newIndex);
    const newIMG = newURL[0].IMG;
    setClickedIMG(newIMG);
    setCurrentIndex(newIndex);
  };

  return (
    <>
      <OtherHeaderBlade paramName={paramName} />
      <div className="h-max w-screen flex justify-center flex-wrap gap-3 py-3 px-[4px]">
        <div className="flex-[100%] max-w-[96%] sm:flex-[50%] sm:max-w-[48%] md:flex-[25%] md:max-w-[24%] px-0 py-[4px]">
          {GalleryData.map((data, index) => (
            <img
              onClick={() => handleClick(data, index)}
              key={index}
              src={data.IMG}
              alt=""
              className="mt-[8px] rounded-lg align-middle w-[100%]"
            />
          ))}{" "}
        </div>
        <div className="flex-[100%] max-w-[96%] sm:flex-[50%] sm:max-w-[48%] md:flex-[25%] md:max-w-[24%] px-0 py-[4px]">
          {GalleryData.map((data) => (
            <img
              onClick={() => handleClick(data)}
              key={data.id}
              src={data.IMG}
              alt=""
              className="mt-[8px] rounded-lg align-middle w-[100%]"
            />
          ))}{" "}
        </div>
        <div className="flex-[100%] max-w-[96%] sm:flex-[50%] sm:max-w-[48%] md:flex-[25%] md:max-w-[24%] px-0 py-[4px]">
          {GalleryData.map((data) => (
            <img
              onClick={() => handleClick(data)}
              key={data.id}
              src={data.IMG}
              alt=""
              className="mt-[8px] rounded-lg align-middle w-[100%]"
            />
          ))}{" "}
        </div>
        <div className="flex-[100%] max-w-[96%] sm:flex-[50%] sm:max-w-[48%] md:flex-[25%] md:max-w-[24%] px-0 py-[4px]">
          {GalleryData.map((data) => (
            <img
              onClick={() => handleClick(data)}
              key={data.id}
              src={data.IMG}
              alt=""
              className="mt-[8px] rounded-lg align-middle w-[100%]"
            />
          ))}{" "}
        </div>
        {clickedIMG && (
          <GalleryModal
            clickedIMG={clickedIMG}
            setClickedIMG={setClickedIMG}
            handleRotationRight={handleRotationRight}
            handleRotationLeft={handleRotationLeft}
          />
        )}
      </div>
    </>
  );
};

export default Gallery;
