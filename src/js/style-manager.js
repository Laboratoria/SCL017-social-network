/* eslint-disable */ 
function someStyling(path, footer, titleDoc) {
  titleDoc.innerHTML = '';
  // Agregamos stilos dependientes de la ruta

  function footerScroll() {
    window.addEventListener('scroll', () => {
      if (window.scrollY === 0) {
        footer.classList.remove('scrolling');
      } else {
        footer.classList.add('scrolling');
      }
    });
  }
  switch (path) {
    case '/':
      footer.style.display = 'block';
      titleDoc.innerHTML = 'Laboratoria Students';
      footerScroll();
      break;
    case '/login':
      footer.style.display = 'block';
      titleDoc.innerHTML = 'Login - Laboratoria Students';
      break;
    case '/register':
      footer.style.display = 'block';
      titleDoc.innerHTML = 'Register - Laboratoria Students';
      break;
    case '/feed':
      footer.style.display = 'none';
      titleDoc.innerHTML = 'Feed - Laboratoria Students';      

      break;
    case '/profile':
      footer.style.display = 'none';
      titleDoc.innerHTML = 'Profile - Laboratoria Students';
      break;    
  }
}
export { someStyling };