import React from "react";
import bg6 from "../assets/img/Screenshot (24).png";
import bg7 from "../assets/img/invest.webp";
import bg8 from "../assets/img/mother child.jpg";
import arrow from "../assets/icons/right-arrows (1).png";
import pro from "../assets/img/pro.jpg";
import news from "../assets/img/news.jpeg";
function Content4() {
  return (
    <div>
      <div className="p-20">
        <h1 className="text-center text-3xl pb-12">LuLu Facts</h1>
        <div className="grid grid-cols-4 text-center">
          <div className="space-y-5 border-r-2 p-4">
            <h1 className="text-3xl text-[#D19E38] font-bold">
              1,104,000+sq.mtr
            </h1>
            <p className="text-[#626A71] text-xl">total retail space</p>
          </div>
          <div className="space-y-5 border-r-2 p-4">
            <h1 className="text-3xl text-[#D19E38] font-bold">65k+</h1>
            <p className="text-[#626A71] text-xl">Employees</p>
          </div>
          <div className="space-y-5 border-r-2 p-4">
            <h1 className="text-3xl text-[#D19E38] font-bold">23</h1>
            <p className="text-[#626A71] text-xl">Countries Worldwide</p>
          </div>
          <div className="space-y-5  p-4">
            <h1 className="text-3xl text-[#D19E38] font-bold">258</h1>
            <p className="text-[#626A71] text-xl">Retail Store</p>
          </div>
        </div>
      </div>
      <div className="mt-16 flex justify-center items-center">
        <img src={bg6} alt="" />
      </div>
      <div className="grid grid-cols-3 p-0">
        <div>
          <img className="h-[100%]" src={bg7} alt="" />
        </div>
        <div className="bg-[#D19E38] text-white p-10 space-y-8">
          <h1 className="text-4xl text-black">CSR - Initiative</h1>
          <p className="text-xl">
            LuLu group international hands over AED 456,753 cheque donations to
            dhubai care in support for water, sanitaion and hygien facilities in
            schools (wash) programs
          </p>
          <button className="flex gap-2 border p-1 px-3">
            <p>more</p>
            <img src={arrow} alt="" />
          </button>
        </div>
        <div>
          <img className="h-[100%]" src={bg8} alt="" />
        </div>
      </div>
      <div className="flex p-20 pt-28 gap-8  ">
        <div className="relative  flex justify-center items-center text-white" >
          <img className="brightness-50 " src={pro} alt="" />
          <h1 className="font-medium text-2xl tracking-wider absolute">
            Upcoming Projects
          </h1>
        </div>
        <div className="relative  flex justify-center items-center text-white">
          <img className="brightness-50 " src={news} alt="" />
          <h1 className="font-medium text-2xl tracking-wider absolute">Press release</h1>
        </div>
      </div>
    </div>
  );
}

export default Content4;
