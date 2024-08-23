"use client";
import { useEffect, useState } from "react";
import { IoAddCircle } from "react-icons/io5";
import { MdAdd } from "react-icons/md";

export default function AdminPage() {
  const [pinjam, setPinjam] = useState([]);
  const data = JSON.parse(localStorage.getItem("books") || "");
  useEffect(() => {
    async function handlePinjam() {
      const result = await fetch("http://localhost:3000/api/pinjam", {
        method: "GET",
      });
      const res = await result.json();
      setPinjam(res.data);
    }
    handlePinjam();
  }, []);
  async function handleTambahBuku(e: any) {
    e.preventDefault();
    data.push({
      title: e.target.title.value,
      authors: e.target.authors.value,
      imgUrl: e.target.imgUrl.value,
      pages: e.target.pages.value,
    });
    const result = await fetch("http://localhost:3000/api/books", {
      method: "PUT",
      body: JSON.stringify(data),
    });
    const res = await result.json();
  }
  async function handleUbahPinjamBuku(e: any) {
    e.preventDefault();
    const data={
      namaLengkap: e.target.namaLengkap.value,
      email: e.target.email.value,
      judulBuku: e.target.judulBuku.value,
      tglKembali: e.target.tglKembali.value,
    };
    const result = await fetch("http://localhost:3000/api/books", {
      method: "PUT",
      body: JSON.stringify({data:data}),
    });
    const res = await result.json();
  }

  return (
    <>
      <h1 className="text-2xl font-bold text-center">Admin Page</h1>
      <main className="flex flex-col gap-4">
        <div>
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Peminjaman Buku
              </caption>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Nama Lengkap
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Judul
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tanggal Kembali
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {pinjam.length > 0 &&
                  pinjam.map((data: any) => (
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        {data.namaLengkap}
                      </th>
                      <td className="px-6 py-4">{data.email}</td>
                      <td className="px-6 py-4">{data.judulBuku}</td>
                      <td className="px-6 py-4">{data.tglKembali}</td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>

        <form onSubmit={handleTambahBuku} className="flex flex-col">
          <h1 className="flex gap-2 items-center">
            Tambah Buku <MdAdd></MdAdd>
          </h1>
          <span>
            <label htmlFor="">Judul Buku :</label>
            <input type="text" name="title" className="bg-gray-300 " />
          </span>
          <span>
            <label htmlFor="">Penulis :</label>
            <input type="text" name="authors" className="bg-gray-300 " />
          </span>
          <span>
            <label htmlFor="">Deskripsi Buku : </label>
            <input type="text" className="bg-gray-300 " />
          </span>
          <input
            type="hidden"
            name="imgUrl"
            value={
              "http://libgen.is/covers/422000/6cfa8cd82caa5b602d5d83a61bda7d50-d.jpg"
            }
          />
          <span>
            <label htmlFor="">Jumlah Stok :</label>
            <input type="text" name="pages" className="bg-gray-300 " />
          </span>
          <input
            type="submit"
            value="Submit"
            className="bg-gray-300 font-bold"
          />
        </form>

        <form aria-disabled className="flex flex-col">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
              <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                Peminjaman Buku
              </caption>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Nama Lengkap
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Judul Buku
                  </th>
                  <th scope="col" className="px-6 py-3">
                    Tanggal Kembali
                  </th>
                  <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {pinjam.length > 0 &&
                  pinjam.map((data: any,i:number) => (
                    <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                      <th
                        scope="row"
                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                      >
                        <input
                          type="text"
                          name="namaLengkap"
                          defaultValue={data.namaLengkap}
                        />
                      </th>
                      <td className="px-6 py-4">
                        <input
                          type="text"
                          name="email"
                          defaultValue={data.email}
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="text"
                          name="judulBuku"
                          defaultValue={data.judulBuku}
                        />
                      </td>
                      <td className="px-6 py-4">
                        <input
                          type="text"
                          name="tglKembali"
                          defaultValue={data.tglKembali}
                        />
                        <input hidden name="id" type="text" value={data.id} />
                      </td>
                      
                      <td className="px-6 py-4 text-right">
                        <input
                          type="submit" value={"Ubah"}
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                        >
                        </input>
                      </td>
                    
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </form>
      </main>
    </>
  );
}
