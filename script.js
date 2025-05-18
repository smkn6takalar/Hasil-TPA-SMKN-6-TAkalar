function cariGambar() {
  const nisn = document.getElementById("nisnInput").value.trim();
  const hasilDiv = document.getElementById("hasil");

  if (nisn === "") {
    hasilDiv.innerHTML = "<p>Silakan masukkan NISN.</p>";
    return;
  }

  const ekstensi = [".jpg", ".png"];
  let ditemukan = false;

  hasilDiv.innerHTML = "<p>Mencari gambar...</p>";

  ekstensi.forEach((ext, index) => {
    const img = new Image();
    img.src = `images/${nisn}${ext}`;
    img.onload = () => {
      if (!ditemukan) {
        ditemukan = true;
        hasilDiv.innerHTML = `<img src="images/${nisn}${ext}" alt="Foto Siswa dengan NISN ${nisn}">`;
      }
    };
    img.onerror = () => {
      if (index === ekstensi.length - 1 && !ditemukan) {
        hasilDiv.innerHTML = `<p>Gambar untuk NISN ${nisn} tidak ditemukan.</p>`;
      }
    };
  });
}
