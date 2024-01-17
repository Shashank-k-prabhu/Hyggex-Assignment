import React, { useState } from "react";
import { FaLightbulb, FaVolumeUp } from "react-icons/fa";

const Flashcard = ({
  cardData,
  totalPages,
  currentPage,
  onLeftClick,
  onRightClick,
}) => {
  const [isFlipped, setFlipped] = useState(false);

  const handleFlip = () => {
    setFlipped(!isFlipped);
  };

  const handleLeftClick = () => {
    if (currentPage > 1) {
      onLeftClick();
    }
  };

  const handleRightClick = () => {
    if (currentPage < totalPages) {
      onRightClick();
    }
  };

  return (
    <div className="w-3/6 h-[393.19px]   p-4 mx-80 ">
      <div
        className={`w-full h-full rounded-3xl shadow-md transform ${
          isFlipped
            ? "rotateY-180 bg-gradient-to-tr to-[#2e3455] from-[#565d65] "
            : "bg-gradient-to-tr to-[#051A91] from-[#1F80EB]"
        }`}
        onClick={handleFlip}
      >
        <div className="flex justify-between items-start absolute top-2 left-2 right-2 mt-2 mx-5">
          <FaLightbulb className="text-white text-xl" />
          <FaVolumeUp className="text-white text-xl" />
        </div>
        <div className="flex flex-col justify-center items-center h-full">
          {isFlipped ? (
            <div className="text-center text-white text-[38.26px] font-bold  tracking-wide">
              {cardData.backContent}
            </div>
          ) : (
            <div className="text-center text-white text-[38.26px] font-bold  tracking-wide">
              {cardData.frontContent}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-between items-center mt-8">
        <button className="px-3 py-2 " onClick={handleFlip}>
          <img
            src={process.env.PUBLIC_URL + "/Reverse button.png"}
            alt="Reverse Button"
          />
        </button>
        <button className="px-3 py-2 " onClick={handleLeftClick}>
          <img
            src={process.env.PUBLIC_URL + "/Left button.png"}
            alt="Left Button"
          />
        </button>
        <div className="text-center font-semibold">
          {currentPage} / {totalPages}
        </div>
        <button className="px-3 py-2" onClick={handleRightClick}>
          <img
            src={process.env.PUBLIC_URL + "/Right button.png"}
            alt="Right Button"
          />
        </button>
        <button className="px-3 py-2 ">
          <img
            src={process.env.PUBLIC_URL + "/FullScreen button.png"}
            alt="FullScreen Button"
          />
        </button>
      </div>
    </div>
  );
};

export default Flashcard;
