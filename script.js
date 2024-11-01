const N_SQUARES = 10000;
for (let i = 0; i < N_SQUARES; i++) {
  const $square = document.createElement('div');

  $square.classList.add('square');
  document.body.appendChild($square);
}
