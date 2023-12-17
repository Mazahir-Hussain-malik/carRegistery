import React from "react";
import { useState } from "react";
import { connectWallet, register } from "../api/events";
import { useEffect } from "react";
import { fields } from "../config";
const { register: registerFields } = fields.car;
export function InputField(props) {
  return (
    <input
      {...props}
      className="flex flex-col justify-start items-start h-[72px] w-full min-w-[325px] max-w-[475px] relative px-3 py-1.5 rounded-xl bg-white"
    />
  );
}

export default function RegisterCar() {
  const [data, setData] = useState({
    vin: "",
    owner: "",
    purchasePrice: "",
    accidentInvolvement: false,
    manufacturedDate: "",
    color: "",
    brand: "",
    numberPlate: "",
  });

  useEffect(() => {
    // connectWallet().then(() => {
    //   console.log("connected");
    // });
  }, []);
  return (
    <div
      style={{
        backgroundImage: "url(./assets/images/home-bg.png)",
      }}
      className="flex flex-col justify-between items-center mx-auto w-full max-w-[1440px] h-[2005px] relative overflow-hidden py-[196px] bg-[#505]/[0.77]"
    >
      <div className="flex flex-col justify-start items-center relative gap-6">
        <img
          src="./assets/images/register-illustration.png"
          className="w-[1024px] h-[864px] object-cover"
        />
        <p className="w-[410px] text-[46px] font-bold text-center text-white">
          Register Car
        </p>
      </div>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const { error, data: response } = await register.car({
            ...data,
            accidentInvolvement: data.accidentInvolvement === "on",
          });
          if (error) {
            console.log("error while registering car -> ", response);
          } else {
            console.log("car has been registered -> ", response);
          }
        }}
        className="flex flex-col justify-start items-center gap-16"
      >
        <div className="flex flex-wrap justify-center items-center w-full min-w-[325px] max-w-[1024px] gap-6 p-2.5">
          {registerFields.map((field, index) => (
            <InputField
              key={index}
              {...field}
              onChange={(e) => {
                setData({
                  ...data,
                  [e.target.name]: e.target.value,
                });
              }}
            />
          ))}
        </div>
        <button
          type="submit"
          className="flex flex-col justify-center items-center h-24 w-[325px] relative px-3 py-1.5 rounded-xl bg-[#bdaee8]"
        >
          <p className="text-[46px] font-bold text-center text-black">
            Register
          </p>
        </button>
      </form>
    </div>
  );
}
