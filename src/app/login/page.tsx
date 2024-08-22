"use client";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";
export default function ModalLogin() {
  const [errorLogin, setErrorLogin] = useState("");
  async function handleLogin(e: any) {
    e.preventDefault();
    console.log(typeof e.target.password.value)
    const result = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value,
      }),
    });
    const res = await result.json();
    setErrorLogin(res.message);
    if (res.success === true) {
     window.location.href="/admin";
    }}

   
  return (
    <>
      <div className="bg-black z-20 w-full h-full bg-opacity-80 fixed">
        <form
          onSubmit={handleLogin}
          className="absolute top-12 left-1/2 -translate-x-1/2 justify-center bg-white px-8 pt-6 pb-12 grid rounded-md"
        >
          <RxCross1 className="text-2xl place-self-end cursor-pointer hover:bg-gray-200 mb-3"></RxCross1>
          <span className="flex justify-between items-end mb-4 ">
            <h1 className="font-extrabold text-2xl">Masuk</h1>
            <p className="font-semibold text-sm text-blueP cursor-pointer">
              Daftar
            </p>
          </span>
          <div className="grid gap-4">
            <span className="flex items-center  w-72 rounded-x bg-gray-300">
              <MdEmail className="w-10 h-10 p-2 rounded-md"></MdEmail>
              <span className="relative w-full min-w-[200px] h-10 bg-white">
                <input
                  className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 border-blue-gray-200 focus:border-gray-900"
                  placeholder=" "
                  name="email"
                  required
                />
                <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent  before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent  after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                  Email
                </label>
              </span>
            </span>
            <span className="flex items-center  w-72 bg-gray-300">
              <RiLockPasswordFill className="w-10 h-10 p-2"></RiLockPasswordFill>
              <span className="relative w-full min-w-[200px] h-10 bg-white">
                <input
                  type="password"
                  className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 border-blue-gray-200 focus:border-gray-900"
                  placeholder=" "
                  name="password"
                  required
                />
                <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent  before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent  after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                  Password
                </label>
              </span>
            </span>
            <input
              type="submit"
              value="Masuk"
              className="block bg-blue-700 text-white font-bold p-2 rounded-lg mt-2 cursor-pointer outline hover:outline-[2px] hover:outline-yellow-500 box-content"
            />
          </div>
          <p className="text-red-500 text-xs font-semibold mt-2 text-center">
            {errorLogin}
          </p>
          <p className="text-center mt-7 text-xs text-gray-600">
            atau masuk dengan{" "}
          </p>
          <button className="border-[1px] mt-1 text-xs text-gray-600 font-semibold hover:bg-gray-200 p-1 rounded-md border-gray-300  w-full ">
            Metode Lain
          </button>
        </form>
      </div>
    </>
  );
}
