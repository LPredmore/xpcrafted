(() => {
  const quantityEl = document.querySelector('#quantity');
  const quantityLabelEl = document.querySelector('#quantity-label');
  const totalEl = document.querySelector('#total');
  const noteEl = document.querySelector('#note-text');
  const statusEl = document.querySelector('#copy-status');
  const decreaseButton = document.querySelector('#decrease');
  const increaseButton = document.querySelector('#increase');
  const copyButton = document.querySelector('#copy-note');

  let quantity = 1;

  const render = () => {
    quantityEl.textContent = String(quantity);
    quantityLabelEl.textContent = quantity === 1 ? 'drawing' : 'drawings';
    totalEl.textContent = `$${quantity}`;
    noteEl.textContent = `XP Crafted — ${quantity} ${quantity === 1 ? 'drawing' : 'drawings'}`;
  };

  decreaseButton.addEventListener('click', () => {
    quantity = Math.max(1, quantity - 1);
    statusEl.textContent = '';
    render();
  });

  increaseButton.addEventListener('click', () => {
    quantity = Math.min(25, quantity + 1);
    statusEl.textContent = '';
    render();
  });

  copyButton.addEventListener('click', async () => {
    const note = noteEl.textContent;
    try {
      await navigator.clipboard.writeText(note);
      statusEl.textContent = 'Payment note copied.';
    } catch {
      statusEl.textContent = 'Select and copy the note above.';
    }
  });

  render();
})();
