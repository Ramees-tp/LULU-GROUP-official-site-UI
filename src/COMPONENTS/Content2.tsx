import React from "react";
import img1 from "../assets/img/img11.webp";
import img2 from "../assets/img/manufacturing.jpeg";
import img3 from "../assets/img/distri.jpeg";
import img4 from "../assets/img/hospitality.jpg";
import img5 from "../assets/img/realestate.jpeg";
import img6 from "../assets/img/yusuffali-removebg-preview.png";
import img7 from "../assets/img/trophy.jpeg";
import img8 from "../assets/img/projects.jpeg";

function content2() {
  return (
    <div className="px-20">
      <div>
        <h1 className="text-3xl font-medium py-10">Business Sector</h1>
        <div className="flex justify-between gap-10">
          <div
            className=" p-60  bg-cover bg-center flex justify-center items-center font-bold text-2xl w-[50%] brightness-50"
           style={{ backgroundImage: `url(${img1})` }}
          >
            retail
          </div>
          <div className="text-white grid grid-cols-2 grid-rows-2 text-center gap-10 w-[50%]">
            <div
              className="bg-cover flex justify-center items-center font-bold text-2xl brightness-50"
              style={{ backgroundImage: `url(${img2})` }}
            >
              Manufacturing & Processing
            </div>
            <div
              className="bg-cover flex justify-center items-center font-bold text-2xl brightness-50"
              style={{ backgroundImage: `url(${img3})` }}
            >
              Distribution
            </div>
            <div
              className="bg-cover bg-center flex justify-center items-center font-bold text-2xl brightness-50"
              style={{ backgroundImage: `url(${img4})` }}
            >
              Hospitality
            </div>
            <div
              className="bg-cover  flex justify-center items-center font-bold text-2xl brightness-50"
              style={{ backgroundImage: `url(${img5})` }}
            >
              Real Estate
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-9 gap-10  mt-40">
        <div
          style={{ backgroundImage: `url(${img6})` }}
          className="col-span-4 pr-80 text-white bg-[#4B535C] p-16 flex flex-col justify-center bg-no-repeat space-y-4"
        >
          <h1>CMD'S</h1>
          <h1 className="font-bold text-4xl">Message</h1>
          <p className="text-gray-400 text-lg">
            Business is not just about money, products or services.
          </p>
          <button>
            <img src="" alt="" />
          </button>
        </div>
        <div className=" col-span-3 text-white p-10 bg-[#D19E38] flex flex-col justify-center space-y-5">
          <h1 className="text-3xl text-black">Testimonials</h1>
          <p className="text-xl ">
            Lulu is one our key partner in th e region becuase we as a company
            countinously strive towards improving relationships with our
            shoppers{" "}
          </p>
          <div className="pt-12">
            <p>
              <b>Koji Naka</b>
            </p>
            <p className="">GM-Retail-Panasonic</p>
          </div>
        </div>
        <div className="col-span-2 gap-10 text-white flex flex-col justify-between text-center">
          <div
            className="p-16 text-2xl bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${img7})` }}
          >
            Awards & Achievements
          </div>
          <div
            className="p-16 text-2xl bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${img8})` }}
          >
          
            Upcoming Projects
          </div>
        </div>
      </div>
    </div>
  );
}

export default content2;
