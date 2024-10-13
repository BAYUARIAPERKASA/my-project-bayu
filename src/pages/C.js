import React from "react";

function RencanaPembelajaran() {
  // Sample data for the learning plan
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

  // Inline styles for the table and other elements
  const tableStyles = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
  };

  const thTdStyles = {
    border: "1px solid #ccc",
    padding: "10px",
    textAlign: "left",
  };

  const thStyles = {
    ...thTdStyles,
    backgroundColor: "#f4f4f4",
  };

  const evenRowStyles = {
    backgroundColor: "#f9f9f9",
  };

  const hoverRowStyles = {
    backgroundColor: "#f1f1f1",
  };

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
        <table style={tableStyles}>
          <thead>
            <tr>
              <th style={thStyles}>Minggu</th>
              <th style={thStyles}>Topik</th>
              <th style={thStyles}>Deskripsi</th>
            </tr>
          </thead>
          <tbody>
            {rencana.map((item, index) => (
              <tr
                key={index}
                style={index % 2 === 0 ? evenRowStyles : {}}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    hoverRowStyles.backgroundColor)
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.backgroundColor =
                    index % 2 === 0 ? evenRowStyles.backgroundColor : "white")
                }
              >
                <td style={thTdStyles}>{item.minggu}</td>
                <td style={thTdStyles}>{item.topik}</td>
                <td style={thTdStyles}>{item.deskripsi}</td>
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
