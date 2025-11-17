  // Поточний рік
    document.getElementById('y').textContent = new Date().getFullYear();

    // Перемикач теми (запам'ятовує вибір в localStorage)
    const root = document.documentElement;
    const key = 'theme:light';
    const saved = localStorage.getItem(key);
    if (saved === '1') root.classList.add('light');
    document.getElementById('theme').addEventListener('click', () => {
      root.classList.toggle('light');
      localStorage.setItem(key, root.classList.contains('light') ? '1' : '0');
    });