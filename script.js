// A disclosure menu: without JavaScript, all navigation links remain visible.
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#site-navigation');

if (menuButton && navigation) {
  const mobile = window.matchMedia('(max-width: 640px)');

  const setMenuOpen = (open) => {
    menuButton.setAttribute('aria-expanded', String(open));
    navigation.dataset.open = String(open);
    menuButton.querySelector('.menu-label').textContent = open ? 'Close' : 'Menu';
  };

  setMenuOpen(false);
  document.documentElement.classList.add('js');

  menuButton.addEventListener('click', () => {
    setMenuOpen(menuButton.getAttribute('aria-expanded') !== 'true');
  });

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuOpen(false);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  document.addEventListener('click', (event) => {
    if (!navigation.contains(event.target) && !menuButton.contains(event.target)) {
      setMenuOpen(false);
    }
  });

  mobile.addEventListener('change', () => {
    const focusWouldBeHidden = mobile.matches && navigation.contains(document.activeElement);
    setMenuOpen(false);
    if (focusWouldBeHidden) menuButton.focus();
  });
}
