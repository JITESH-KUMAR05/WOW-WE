import React, { useState } from "react";
import "./join.css";

const JoinNow = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleSignUp = () => {
    // Perform sign-up logic here
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Phone Number:", phoneNumber);
    console.log("City:", city);
    console.log("Country:", country);
  };

  return (
    <div className=" w-full  items-center flex flex-col  h-screen pt-20">
      <div className=" w-full flex justify-center">
        <h2 className="font-bold text-[001b5e] text-[2rem] bg-green-600 w-[30%] p-1 flex mt-0 mb-0  justify-center rounded-xl">
          Join Now
        </h2>
      </div>
      <div className="w-full h-screen flex gap-4">
        <div className="flex flex-col w-[32%]">
          <div>
            <img
              className="w-[100%] mt-[10rem] rounded-xl shadow-lg shadow-gray-400 "
              src="https://as1.ftcdn.net/v2/jpg/03/17/77/56/1000_F_317775600_JKciDI05JhXozAALhu87VYuQ12rml6ru.jpg"
              alt="Plant a tree on your birthday"
            />
          </div>
        </div>
        <div className="w-[30%]  ">
          <form className=" w-[100%]  items-center flex flex-col justify-center ">
            <label className="yes w-full ">
              <p className="label-heading font-bold text-[1.5rem] mt-6 ml-3">
                Full Name
              </p>
              <input
                className="label-input outline-gray-200 p-3 shadow-lg border-gray-200 mb-0 shadow-gray-50 w-full rounded-full focus:shadow-lg "
                placeholder="Enter your full name"
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
            </label>
            <br />
            <label className=" w-full mt-0">
              <p className="label-heading label-heading font-bold text-[1.5rem] mb-0 mt-0 ml-3">
                Email
              </p>
              <input
                className="label-input outline-gray-200 p-3 m-0 shadow-lg border-gray-200 shadow-gray-50 w-full rounded-full focus:shadow-lg "
                placeholder="Enter your email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <br />
            <label className=" w-full">
              <p className="label-heading label-heading font-bold text-[1.5rem] ml-3">
                Phone Number
              </p>
              <input
                className="label-input outline-gray-200 p-4 shadow-lg border-gray-200 shadow-gray-50 w-full rounded-full focus:shadow-lg"
                placeholder="Enter your phone number"
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </label>
            <br />
            <label className=" w-full">
              <p className="label-heading label-heading font-bold text-[1.5rem] ml-3">
                City
              </p>
              <input
                className="label-input outline-gray-200 p-4 shadow-lg border-gray-200 shadow-gray-50 w-full rounded-full focus:shadow-lg"
                placeholder="Enter your city"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </label>
            <br />
            <label className=" w-full m-0">
              <p className="label-heading label-heading font-bold text-[1.5rem]  mb-0 mt-0 ml-3">
                Country
              </p>
              <input
                className="label-input outline-gray-200 p-4 shadow-lg border-gray-200 shadow-gray-50 w-full rounded-full focus:shadow-lg"
                placeholder="Enter your country"
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </label>
            <br />
            <button
              type="button"
              className="join-btn bg-green-600 p-2 rounded-full text-[2rem] font-bold text-[#001b5e]  "
              onClick={handleSignUp}
            >
              Join Now
            </button>
          </form>
        </div>
        <div className="flex flex-col w-[32%]">
          <div>
            <img
              className="w-[100%] mt-[10rem] rounded-xl shadow-lg shadow-gray-400 "
              src="https://as1.ftcdn.net/v2/jpg/03/17/77/56/1000_F_317775600_JKciDI05JhXozAALhu87VYuQ12rml6ru.jpg"
              alt="Plant a tree on your birthday"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinNow;
