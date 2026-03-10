// Fungsi toggle theme
function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

  // Ubah attribute
  html.setAttribute('data-theme', newTheme);

  // Ubah emoji tombol
  const tombol = document.getElementById('tombol');
  tombol.textContent = newTheme === 'dark' ? '☀️' : '🌙';

  // Simpan pilihan user
  localStorage.setItem('theme', newTheme);
}

// Saat halaman load, cek preferensi
document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme');
  const tombol = document.getElementById('tombol');

  if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
    tombol.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
  } else {
    // Default ke dark (sesuai kode aslimu background black)
    document.documentElement.setAttribute('data-theme', 'dark');
    tombol.textContent = '☀️';
  }
});