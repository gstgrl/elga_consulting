import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/About.vue'
import Form from '@/views/Form.vue'
import Thanks from '@/views/Thanks.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: "ELGA"
      },
    },
    {
      path: '/about',
      name: 'about',
      component: About,
      meta: {
        title: "Chi siamo"
      },
    },
    {
      path: '/form',
      name: 'form',
      component: Form,
      meta: {
        title: "Contattaci"
      },
    },
    {
      path: '/thanks',
      name: 'thanks',
      component: Thanks,
      meta: {
        title: "Grazie!"
      },
    }
  ]
})

router.afterEach((to) => {
  document.title = to.meta.title || 'Default Title'; // Cambia il titolo della scheda
});

export default router
