document.querySelectorAll('[data-password-toggle]').forEach((button) => {
  button.addEventListener('click', () => {
    const input = document.getElementById(button.dataset.passwordToggle);
    if (!input) return;
    const isHidden = input.type === 'password';
    input.type = isHidden ? 'text' : 'password';
    button.textContent = isHidden ? 'Sembunyi' : 'Tampil';
    button.setAttribute('aria-label', isHidden ? 'Sembunyikan password' : 'Tampilkan password');
  });
});
