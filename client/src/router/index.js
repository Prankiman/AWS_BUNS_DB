import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
//import Mint from '../views/Mint.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes //routes: routes
})

router.beforeEach(async (to, from, next) => {
  /*let user = store.state.User.user;
  let isAuth = false;
  let isAdmin = false;
  let authCookie = document.cookie.replace('auth=', '');

  if (authCookie) {
    isAuth = true;
    let response;

    const params = new URLSearchParams();
    params.append('auth', authCookie);

    if (!user) {
      response = await axios.get('http://localhost:3000/api/routes/user', { params: { auth: authCookie } });
      user = await store.dispatch('User/setUser', response.data);
    }
  }
  user = store.state.User.user;
  
  if (user != null) {
    if (user.isAdmin) isAdmin = true;
  }

  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  const requiresAdmin = to.matched.some(record => record.meta.requiresAdmin);

  if (requiresAuth && !isAuth) next({ name: 'Login' });
  else if (requiresAdmin && !isAdmin) next({ name: 'Login' });
  else next();*/
  next();
})

export default router