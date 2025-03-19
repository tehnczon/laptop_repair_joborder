import { createRouter, createWebHistory } from 'vue-router'
import ListsView from '@/views/ListsView.vue' // Create this file
import AddView from '@/views/AddView.vue' // Create this file
import update from '@/views/update.vue' // Create this file
// import HomeView from '@/views/HomeView.vue' // Optional home page

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // { path: '/', name: 'home', component: HomeView }, // Home route
    { path: '/lists', name: 'lists', component: ListsView },
    { path: '/add', name: 'add', component: AddView },
    { path: '/update', name: 'update', component: update },
  ],
})

// Prevent direct access if not logged in
router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('auth') === 'true'

  if (to.meta.requiresAuth && !isAuthenticated) {
    window.location.href = '/list' // Redirect to login page
  } else {
    next()
  }
})

export default router
