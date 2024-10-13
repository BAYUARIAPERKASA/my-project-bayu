import React from "react";

function TabelKeuanganPembayaran() {
  // Sample data for the financial payment plan
  const keuangan = [
    {
      tanggal: "2024-01-01",
      kategori: "Pemasukan",
      jumlah: "Rp 10.000.000",
      deskripsi: "Pemasukan awal tahun.",
    },
    {
      tanggal: "2024-01-15",
      kategori: "Pengeluaran",
      jumlah: "Rp 5.000.000",
      deskripsi: "Pembayaran bts mahasiswa",
    },
    {
      tanggal: "2024-02-01",
      kategori: "Pemasukan",
      jumlah: "Rp 15.000.000",
      deskripsi: "Pemasukan bts mahasiswa.",
    },
    {
      tanggal: "2024-02-28",
      kategori: "Pengeluaran",
      jumlah: "Rp 10.000.000",
      deskripsi: "Pembayaran tagihan bts mahasiswa.",
    },
    {
      tanggal: "2024-03-01",
      kategori: "Pemasukan",
      jumlah: "Rp 20.000.000",
      deskripsi: "Pemasukan bulanan bts mahasiswa.",
    },
    {
      tanggal: "2024-03-31",
      kategori: "Pengeluaran",
      jumlah: "Rp 15.000.000",
      deskripsi: "Pembayaran tagihan bts mahasiswa.",
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
        <h1>Tabel Keuangan Pembayaran</h1>
        <p>
          Selamat datang di halaman tabel keuangan pembayaran. Berikut adalah
          tabel keuangan pembayaran yang telah disusun.
        </p>
      </header>

      <main className="main-content">
        <h2>Tabel Keuangan Pembayaran</h2>
        <table style={tableStyles}>
          <thead>
            <tr>
              <th style={thStyles}>Tanggal</th>
              <th style={thStyles}>Kategori</th>
              <th style={thStyles}>Jumlah</th>
              <th style={thStyles}>Deskripsi</th>
            </tr>
          </thead>
          <tbody>
            {keuangan.map((item, index) => (
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
                <td style={thTdStyles}>{item.tanggal}</td>
                <td style={thTdStyles}>{item.kategori}</td>
                <td style={thTdStyles}>{item.jumlah}</td>
                <td style={thTdStyles}>{item.deskripsi}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Tabel Keuangan Pembayaran. Semua hak dilindungi.</p>
      </footer>
    </div>
  );
}

export default TabelKeuanganPembayaran;
