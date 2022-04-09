
const routes = [

  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    name: 'Paradisias',
    children: [
      { path: '', component: () => import('pages/HomePage.vue'), name: 'ParadisiasHome' },
      { path: 'clients', component: () => import('pages/ClientsPage.vue'), name: 'ParadisiasClients' },
      { path: 'chambres', component: () => import('pages/RoomsPage.vue'), name: 'ParadisiasRooms' },
      { path: 'reservations', component: () => import('pages/ReservationsPage.vue'), name: 'ParadisiasReservations' },
      { path: 'employes', component: () => import('pages/EmployesPage.vue'), name: 'ParadisiasEmployes' },
      { path: 'parametres', component: () => import('pages/ParametresPage.vue'), name: 'ParadisiasParametres' },
      { path: 'about', component: () => import('pages/AboutPage.vue'), name: 'ParadisiasAbout' }
    ]
  }
]

export default routes
