import React from "react";

function RencanaPembelajaran() {
  // Data contoh untuk rencana pembelajaran
  const rencana = [
    {
      minggu: 1,
      topik: "Pengenalan Pemrograman",
      deskripsi: "Memahami dasar-dasar pemrograman.",
    },
    {
      minggu: 2,
      topik: "Struktur Data",
      deskripsi: "Belajar tentang berbagai struktur data.",
    },
    {
      minggu: 3,
      topik: "Algoritma",
      deskripsi: "Memahami algoritma dasar dan kompleksitas.",
    },
    {
      minggu: 4,
      topik: "Pengembangan Web",
      deskripsi: "Mempelajari HTML, CSS, dan JavaScript.",
    },
    {
      minggu: 5,
      topik: "Proyek Akhir",
      deskripsi: "Menerapkan semua yang telah dipelajari dalam proyek.",
    },
  ];

  return (
    <div className="container">
      <header className="header">
        <h1>Rencana Pembelajaran</h1>
        <p>
          Selamat datang di halaman rencana pembelajaran. Berikut adalah rencana
          pembelajaran yang telah disusun.
        </p>
      </header>

      <main className="main-content">
        <h2>Rencana Pembelajaran</h2>
        <table className="learning-plan-table">
          <thead>
            <tr>
              <th>Minggu</th>
              <th>Topik</th>
              <th>Deskripsi</th>
            </tr>
          </thead>
          <tbody>
            {rencana.map((item, index) => (
              <tr key={index}>
                <td>
                  <span>{item.minggu}</span>
                </td>
                <td>
                  <span style={{ marginTop: "10px", marginBottom: "10px" }}>
                    {item.topik}
                  </span>
                </td>
                <td>
                  <span style={{ marginTop: "10px", marginBottom: "10px" }}>
                    {item.deskripsi}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Rencana Pembelajaran. Semua hak dilindungi.</p>
      </footer>
    </div>
  );
}

export default RencanaPembelajaran;
