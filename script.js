const btn = document.querySelector('.btn-teks');
const btnTeks = document.querySelector('.btn-teks');
const code = document.querySelector('.code');

const el = `<pre>
// HTML
div class "square">

// CSS
.square {
    width: 150px;
    aspect-ratio: 2;
    background-color: red;
  }</pre>`;

btn.addEventListener('click', () => {
  code.classList.toggle('teks-code');

  if (code.classList.contains('teks-code')) {
    btnTeks.innerHTML = 'Sembunyian Kode';
    code.innerHTML = el;
  } else {
    btnTeks.innerHTML = 'Lihat Kode';
    code.innerHTML = '';
  }
});
