import Home from '../components/Home';
import About from '../components/About';
import Login from '../components/Login';


export default [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/posts',
      name: 'Home',
      component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    }
]