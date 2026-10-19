/* Javascript */

(function () {
/* creating variables */
  var btn      = document.querySelector('.menu-toggle');
  var nav      = document.getElementById('primary-nav');
  /* works like querySelector('#primary-nav'); */
  var backdrop = document.querySelector('.nav-backdrop');   /* play with this */

  if (!btn || !nav || !backdrop) return;
  /* if NOTbtn OR NOTnav OR NOTbackdrop then return; */
  /* if any of these don't exist then stop */

  function setOpen(open) {
    btn.setAttribute('aria-expanded', String(open));  /* sets T or F (menu open/closed) for screenreader */
    btn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); /* sets screen reader text (Boolean) */
    document.body.classList.toggle('menu-open', open);  /* sets menu-open as TRUE or FALSE */
    backdrop.hidden = !open;  /* if menu is open, set hidden == FALSE */
  }

  // Tap the hamburger
  /* when you click the hamburger it runs this function */
  btn.addEventListener('click', function () {
    var isOpen = btn.getAttribute('aria-expanded') === 'true';
    setOpen(!isOpen);  
    /* calls the opposite of the state that is currently set. i.e.
    if the drawer is open (aria-expanded === 'true') it calls setOpen and sets it to !isOpen */
  });

  // Tap the backdrop
  backdrop.addEventListener('click', function () { setOpen(false); });  /* closes menu on click */
  /* makes it so if you click the main page outside of the hamburger menu the menu goes away! */

  // Tap a link inside the drawer
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { setOpen(false); });
    /* setOpen(false) will close hamburger menu once a link is clicked */
  });

  // Press Escape on the keyboard
  /* creates an event (e): if a key ('keydown') is hit and runs the function, returning e */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && document.body.classList.contains('menu-open')) {
      setOpen(false);
/* if the button pressed is Escape, set "setOpen" to FALSE -- this closes the hamburger menu by setting boolean
to FALSE */
    }
  });
})();