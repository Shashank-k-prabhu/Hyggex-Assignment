const Publishbar = () => {
  return (
    <div className="mt-20">
      <div className="flex">
        <div className="flex flex-row gap-1">
          <img
            className="h-2/3"
            src={process.env.PUBLIC_URL + "/Logo.png"}
            alt="Logo"
          />
          <img
            className="h-1/3 mt-6"
            src={process.env.PUBLIC_URL + "/Publish.png"}
            alt="Publish"
          />
        </div>
        <div className="grow"></div>
        <div className="flex flex-row gap-2 mt-10">
          <img
            className="h-1/3 cursor-pointer"
            src={process.env.PUBLIC_URL + "/plus.png"}
            alt="Logo"
            
          />
          <div className="text-xl font-semibold mt-1 bg-clip-text text-transparent bg-gradient-to-b from-[#06286E] to-[#164EC0]">
            Create Flashcard
          </div>
        </div>
      </div>
    </div>
  );
};
export default Publishbar;
