import Flashcard from "./Flashcard";
import Tabs from "./Tabs";
import React, { useState } from "react";

const Flashcards = ()=>{
  const [currentPage, setCurrentPage] = useState(1);
  const totalFlashcards = 3;
  const flashcards = [
    { frontContent: "9 + 6 + 7x - 2x - 3", backContent: "5x + 12" },
    { frontContent: "Front Content 2", backContent: "Back Content 2" },
    { frontContent: "Front Content 3", backContent: "Back Content 3" },
  ];
  const handleLeftClick = () => {
    setCurrentPage((prevPage) => Math.max(1, prevPage - 1));
  };

  const handleRightClick = () => {
    setCurrentPage((prevPage) => Math.min(totalFlashcards, prevPage + 1));
  };
  return (
    <div className=" flex flex-col gap-8">
      <Tabs />
      <Flashcard
        cardData={flashcards[currentPage - 1]}
        totalPages={totalFlashcards}
        currentPage={currentPage}
        onLeftClick={handleLeftClick}
        onRightClick={handleRightClick}
      />
    </div>
  );
}
export default Flashcards;