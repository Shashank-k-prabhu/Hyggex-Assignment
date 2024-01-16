
function Heading(){

    return (
      <div className="flex flex-row">
        <div className="basis-3/4 mt-2 cursor-pointer">
          <img src={process.env.PUBLIC_URL + "/image 1.png"} alt="Logo" />
        </div>
        <div className="flex flex-row  gap-6 basis-1/4">
          <div className="flex flex-row  gap-6  font-normal ">
            <div className="basis-1/5 cursor-pointer hover:bg-slate-200 rounded-2xl p-2 m-1">
              Home
            </div>
            <div className="basis-1/5 cursor-pointer  hover:bg-slate-200 rounded-2xl p-2 m-1">
              Flashcard
            </div>
            <div className="basis-1/5 cursor-pointer  hover:bg-slate-200 rounded-2xl p-2 m-1">
              Contact
            </div>
            <div className="basis-1/5 cursor-pointer  hover:bg-slate-200 rounded-2xl p-2 m-1">
              FAQ
            </div>
          </div>
          <div className="basis-1/5 py-1 cursor-pointer">
            <div className="inline-flex items-center justify-center gap-[10px] px-[40px] py-[13px] relative bg-white rounded-[32px] [background:linear-gradient(180deg,rgb(6,40,110)_0%,rgb(22,78,192)_100%)]">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Inter-Medium',Helvetica] font-medium text-white text-[18px] tracking-[0] leading-[normal]">
                Login
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}

export default Heading;