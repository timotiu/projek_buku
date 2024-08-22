"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { BiBook } from "react-icons/bi";
import { FaBook, FaCalendar, FaUser } from "react-icons/fa";
import { MdEmail, MdOutlineDateRange } from "react-icons/md";
import { getBooks } from "./utils/fetchBook";
import Link from "next/link";

export default function Home() {
  const data = JSON.parse(localStorage.getItem("books") || "");
  const [books, setBooks] = useState([]);
  const [list, setList] = useState(true);
  async function handleTambahData() {
    console.log(data);
    const result = await fetch("http://localhost:3000/api/books", {
      method: "POST",
      body: JSON.stringify({ book: data }),
    });
    const json = await result.json();
    console.log(json);
  }
  useEffect(() => {
    async function getBooks() {
      const result = await fetch("http://localhost:3000/api/books", {
        method: "POST",
        body: JSON.stringify("ece7yguerj13x8JdTfV3"),
      });
      const res = await result.json();
      setBooks(res.data.book);
    }
    getBooks();
  }, []);
  async function handlePinjemBuku(e: any) {
    e.preventDefault();
    const result = await fetch("http://localhost:3000/api/pinjam", {
      method: "POST",
      body: JSON.stringify({
        namaLengkap: e.target.namaLengkap.value,
        email: e.target.email.value,
        judulBuku: e.target.judulBuku.value,
        tglKembali: e.target.tglKembali.value,
      }),
    });
    const res = await result.json();
  }
  getBooks();
  return (
    <>
      <main>
        <div className="w-full relative bg-red-600 h-[20rem] flex flex-col justify-center items-center">
          <h1 className="font-bold text-3xl">Perpustakaan Buku</h1>
          <p className="text-xl">Pusat Buku Terlengkap!</p>
          <Link
            href={"/login"}
            className="absolute top-0 right-12 bg-blue-700 p-1 rounded-md "
          >
            Login
          </Link>
        </div>
        <div>
          <div className="cursor-pointer flex gap-3 justify-center font-semibold my-5">
            <p onClick={() => setList(true)}>List</p>
            <p>|</p>
            <p onClick={() => setList(false)}>Pinjam</p>
          </div>
          {list ? (
            <div className="flex flex-wrap gap-5 ">
              {books.length > 0 &&
                books.map((data: any) => (
                  <div className="flex flex-col w-72">
                    <Image
                      src={data.imgUrl}
                      width={300}
                      height={300}
                      alt="gambarBuku"
                      className="w-72 h-72"
                    ></Image>
                    <p>{data.title}</p>
                    <p>{data.authors}</p>
                    <p>Adala buku keren</p>
                    <p>{data.pages}</p>
                  </div>
                ))}
            </div>
          ) : (
            <form onSubmit={handlePinjemBuku}>
              <h1>Peminjaman Buku</h1>
              <div className="grid gap-4">
                <span className="flex items-center  w-72 rounded-x bg-gray-300">
                  <FaUser className="w-10 h-10 p-2 rounded-md"></FaUser>
                  <span className="relative w-full min-w-[200px] h-10 bg-white">
                    <input
                      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 border-blue-gray-200 focus:border-gray-900"
                      placeholder=" "
                      name="namaLengkap"
                      required
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent  before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent  after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                      Nama Lengkap
                    </label>
                  </span>
                </span>
                <span className="flex items-center  w-72 rounded-x bg-gray-300">
                  <MdEmail className="w-10 p-1 h-10  rounded-md"></MdEmail>
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
                <span className="flex items-center  w-72 rounded-x bg-gray-300">
                  <FaBook className="w-10 h-10 p-2 rounded-md"></FaBook>
                  <span className="relative w-full min-w-[200px] h-10 bg-white">
                    <input
                      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 border-blue-gray-200 focus:border-gray-900"
                      placeholder=" "
                      name="judulBuku"
                      required
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent  before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent  after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                      Judul Buku Peminjaman
                    </label>
                  </span>
                </span>
                <span className="flex items-center  w-72 rounded-x bg-gray-300">
                  <FaCalendar className="w-10 h-10 p-2 rounded-md"></FaCalendar>
                  <span className="relative w-full min-w-[200px] h-10 bg-white">
                    <input
                      className="peer w-full h-full bg-transparent text-blue-gray-700 font-sans font-normal outline outline-0 focus:outline-0 disabled:bg-blue-gray-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 border focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 border-blue-gray-200 focus:border-gray-900"
                      placeholder=" "
                      name="tglKembali"
                      required
                    />
                    <label className="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-gray-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent  before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent  after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-gray-500 peer-focus:text-gray-900 before:border-blue-gray-200 peer-focus:before:!border-gray-900 after:border-blue-gray-200 peer-focus:after:!border-gray-900">
                      Tanggal Pengembalian
                    </label>
                  </span>
                </span>
                <input
                  type="submit"
                  value="Submit"
                  className="w-72 bg-gray-300"
                />
                {/* <span className="flex items-center  w-72 bg-gray-300">
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
              className="block bg-blueP text-white font-bold p-2 rounded-lg mt-2 cursor-pointer outline hover:outline-[2px] hover:outline-yellow-500 box-content"
            /> */}
              </div>
            </form>
          )}
        </div>
      </main>
    </>
  );
}
