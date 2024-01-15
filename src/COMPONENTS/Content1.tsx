import React from "react";
import back from "../assets/icons/backward-arrow.png";
import forward from "../assets/icons/skip-track.png";
import ali from "../assets/img/award.mp4";

function Content1() {
  return (
    <div className=" ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-screen absolute -z-10"
        src={ali}
      ></video>
      <div className=" gap-10 flex flex-col items-center justify-center h-screen text-white">
        <h1 className="font-bold text-4xl">Top Civilian Honour</h1>
        <p className="text-xl font-medium">Abhu Dhabi Awards</p>
      </div>
      <div className="flex bg-[#EAF0F6] ">
        <div className="text-2xl  font-bold p-7 px-16 border-r-4 border-white">
          Latest News
        </div>
        <div className="flex flex-row justify-between ">
          <div>
            <p className="p-6 text-xl text-blue-500  ">
              Lulu group expands further in europe: Lounches operations in
              poland after italy
            </p>
          </div>
          <div className="flex items-center">
            <img src={back} alt="" />
            <img src={forward} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content1;
