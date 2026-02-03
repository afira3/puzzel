let pilihan = [];

function pilih(simbol) {
  if (!pilihan.includes(simbol)) {
    pilihan.push(simbol);
  }
  document.getElementById("pilihan").innerHTML =
    "Pilihan: " + pilihan.join(", ");
}

function cekJawaban() {
  const benar = ["LILIN", "DARAH", "MATA"];
  const overlay = document.getElementById("overlay");
  const text = document.getElementById("overlayText");

  const isBenar =
    pilihan.length === 3 &&
    benar.every(item => pilihan.includes(item));

  overlay.style.display = "flex";

  if (isBenar) {
    text.innerHTML = "✔️ BENAR<br>Kebenaran mulai terbuka...";
  } else {
    text.innerHTML = "❌ SALAH<br>Simbol yang kamu pilih menyesatkan.";
  }

  pilihan = [];
}
