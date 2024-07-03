import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function Login() {
  const [value, setValue] = useState(true);
  const [valueusername, setValuesername] = useState("");
  const [valuepass, setValuepass] = useState("");
  const Navigate = useNavigate();
  const buttonHandler = () => {
    console.log(valueusername, valuepass);
    {
      valueusername === "admin" && valuepass === "admin"
        ? Navigate("/admin")
        : alert("eror");
    }
  };
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500  bg-cover flex items-center justify-center">
      <div className="w-[900px] h-[500px] bg-white m-2 grid grid-cols-5">
        <div className=" bg-pink-500 col-span-3">sajad sajad sajad ali</div>
        <div className="bg-white col-span-2 flex items-center justify-center">
          <div className=" w-[250px] h-[350px] flex flex-col">
            {/* first row */}
            <div className=" flex items-end justify-center">
              <p className="text-[25px]">ورود به کاربر</p>
            </div>
            {/* second row */}
            <div className="flex flex-col ">
              <input
                className=" my-2 text-[10px] w-[100%] h-[30%] p-2 bg-gray-200 text-black "
                placeholder="user name"
                value={valueusername}
                onChange={(e) => {
                  setValuesername(e.target.value);
                }}
              ></input>

              <input
                id="pass"
                className="my-2 text-[10px] w-[100%] h-[30%] p-2 bg-gray-200 text-black"
                placeholder="password"
                type={value ? "password" : "text"}
                value={valuepass}
                onChange={(e) => {
                  setValuepass(e.target.value);
                }}
              ></input>
            </div>

            <div className="text-[8px] flex items-start justify-between px-2">
              <div className="flex cursor-pointer  " >
                <input 
                className="cursor-pointer"
                  type="checkbox"
                  onClick={() => {
                    setValue(!value);
                  }}
                ></input>
                <p className="mx-1">show password</p>
              </div>
              <p>forget password</p>
            </div>
            <div className=" flex items-center justify-center mt-5">
              <button
                className="bg-pink-500 w-[100px] h-[35px] rounded-xl hover: hover:text-white "
                onClick={buttonHandler}
              >
                log in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
