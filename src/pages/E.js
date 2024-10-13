import React from "react";

function E() {
  const data = [
    {
      no: 1,
      tanggal: "2023-01-01",
      jenisPembayaran: "BTS",
      nominal: "Rp 1.000.000",
      status: "Lunas",
    },
    {
      no: 2,
      tanggal: "2023-02-01",
      jenisPembayaran: "BTS",
      nominal: "Rp 1.000.000",
      status: "Lunas",
    },
    {
      no: 3,
      tanggal: "2023-03-01",
      jenisPembayaran: "BTS",
      nominal: "Rp 1.000.000",
      status: "Lunas",
    },
    {
      no: 4,
      tanggal: "2023-04-01",
      jenisPembayaran: "BTS",
      nominal: "Rp 1.000.000",
      status: "Lunas",
    },
    {
      no: 5,
      tanggal: "2023-05-01",
      jenisPembayaran: "BTS",
      nominal: "Rp 1.000.000",
      status: "Lunas",
    },
  ];

  return (
    <div>
      <h1>Daftar Pembayaran Keuangan</h1>
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Tanggal</th>
            <th>Jenis Pembayaran</th>
            <th>Nominal</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.no}</td>
              <td>{item.tanggal}</td>
              <td>{item.jenisPembayaran}</td>
              <td>{item.nominal}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default E;
