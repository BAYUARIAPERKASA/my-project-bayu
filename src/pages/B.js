import React from "react";

function Biodata() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-black">
        Biodata Mahasiswa
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-100 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h2 className="text-xl font-semibold mb-4 text-black-500">
            Detail Biodata
          </h2>
          <div className="mb-4">
            <strong>Nama:</strong> <span>BAYU AP</span>
          </div>
          <div className="mb-4">
            <strong>NIM:</strong> <span>15210007</span>
          </div>
          <div className="mb-4">
            <strong>Program Studi:</strong> <span>Teknik Informatika</span>
          </div>
          <div className="mb-4">
            <strong>Tahun Masuk:</strong> <span>2021</span>
          </div>
          <div className="mb-4">
            <strong>Alamat:</strong> <span>Jalan Raya Bogor, N0. 12</span>
          </div>
          <div className="mb-4">
            <strong>Email:</strong> <span>KOBAYASI123@gmail.com</span>
          </div>
          <div className="mb-4">
            <strong>No. HP:</strong> <span>08768576325</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Biodata;
