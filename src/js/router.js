import landingPage from './views/LandingPage.js';
import loginView from './views/LoginView.js';
import registerView from './views/RegisterView.js';
import feedView from './views/FeedView.js';
import profileView from './views/ProfileView.js';

function router() {
  const rootContainer = document.getElementById('root');

  const routes = {
    '/': landingPage(),
    '/login': loginView(),
    '/register': registerView(),
    '/feed': feedView(),
    '/profile': profileView(),
  };

  const pathname = window.location.pathname;
  if (pathname === '/') {
    rootContainer.appendChild(routes['/']);
  } else if (pathname === '/login') {
    rootContainer.appendChild(routes['/login']);
  } else if (pathname === '/register') {
    rootContainer.appendChild(routes['/register']);
  } else if (pathname === '/feed') {
    rootContainer.appendChild(routes['/feed']);
  } else if (pathname === '/profile') {
    rootContainer.appendChild(routes['/profile']);
  }

  // makes the url pretty
  const changeRouteUrl = (hash) => {
    if (hash === '#/landing') {
      window.history.replaceState({}, 'landing', '/');
    } else if (hash === '#/login') {
      window.history.replaceState({}, 'login', '/login');
    } else if (hash === '#/register') {
      window.history.replaceState({}, 'register', '/register');
    } else if (hash === '#/feed') {
      window.history.replaceState({}, 'feed', '/feed');
    } else if (hash === '#/profile') {
      window.history.replaceState({}, 'profile', '/profile');
    }
  };
  const content = {
    '#/landing': landingPage(),
    '#/login': loginView(),
    '#/register': registerView(),
    '#/feed': feedView(),
    '#/profile': profileView(),
  };
  // Muestra cuando cambia la url muestra el view
  window.addEventListener('hashchange', () => {
    const hashLocation = window.location.hash;
    rootContainer.innerHTML = '';
    if (hashLocation === '#/landing') {
      rootContainer.appendChild(content['#/landing']);
      changeRouteUrl('#/landing');
    } else if (hashLocation === '#/login') {
      rootContainer.appendChild(content['#/login']);
      changeRouteUrl('#/login');
    } else if (hashLocation === '#/register') {
      rootContainer.appendChild(content['#/register']);
      changeRouteUrl('#/register');
    } else if (hashLocation === '#/feed') {
      rootContainer.appendChild(content['#/feed']);
      changeRouteUrl('#/feed');
    } else if (hashLocation === '#/profile') {
      rootContainer.appendChild(content['#/profile']);
      changeRouteUrl('#/profile');
    }
  });

  // guarda en el historial
  window.onpopstate = () => {
    const newPath = window.location.pathname;
    rootContainer.innerHTML = '';
    if (newPath === '/') {
      rootContainer.appendChild(routes['/']);
    } else if (newPath === '/login') {
      rootContainer.appendChild(routes['/login']);
    } else if (newPath === '/register') {
      rootContainer.appendChild(routes['/register']);
    } else if (newPath === '/feed') {
      rootContainer.appendChild(routes['/feed']);
    } else if (newPath === '/profile') {
      rootContainer.appendChild(routes['/profile']);
    }
  };
}
export { router };
