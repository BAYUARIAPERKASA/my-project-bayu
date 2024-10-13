import React from "react";

function D() {
  // Data contoh untuk tabel
  const jadwalKuliah = [
    {
      tanggal: "2024-10-04",
      jamMulai: "18:30:00",
      jamSelesai: "21:00:00",
      namaMatakuliah: "Web Software Tool",
    },
    {
      tanggal: "2024-10-04",
      jamMulai: "18:30:00",
      jamSelesai: "21:00:00",
      namaMatakuliah: "	Software Quality Assurance",
    },
    {
      tanggal: "2024-10-04",
      jamMulai: "18:30:00",
      jamSelesai: "21:00:00",
      namaMatakuliah: "Graphics Design",
    },
    {
      tanggal: "2024-10-04",
      jamMulai: "18:30:00",
      jamSelesai: "21:00:00",
      namaMatakuliah: "Project Proposal and Seminar",
    },
  ];

  return (
    <div>
      <h1 style={{ color: "blue" }}>Jadwal Kuliah</h1>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Tanggal</th>
            <th style={tableHeaderStyle}>Jam Mulai</th>
            <th style={tableHeaderStyle}>Jam Selesai</th>
            <th style={tableHeaderStyle}>Nama Matakuliah</th>
          </tr>
        </thead>
        <tbody>
          {jadwalKuliah.map((jadwal, index) => (
            <tr key={index}>
              <td style={tableCellStyle}>{jadwal.tanggal}</td>
              <td style={tableCellStyle}>{jadwal.jamMulai}</td>
              <td style={tableCellStyle}>{jadwal.jamSelesai}</td>
              <td style={tableCellStyle}>{jadwal.namaMatakuliah}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Styles untuk tabel
const tableHeaderStyle = {
  backgroundColor: "#f2f2f2",
  border: "1px solid #ddd",
  padding: "8px",
  textAlign: "left",
  color: "blue",
};

const tableCellStyle = {
  border: "1px solid #ddd",
  padding: "8px",
  color: "blue",
};

export default D;
