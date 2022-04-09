<template>
  <q-layout view="lHh Lpr lFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->
    <q-header>
      <q-toolbar>
        <q-btn
          flat
          round
          icon="menu"
          @click="toggleLeftDrawer"
        />

        <span class="lt-md absolute-center">
          Paradisias
        </span>
        <span class="gt-sm">
          Paradisias <!-- {{ $t('failed') }} -->
        </span>
      </q-toolbar>
    </q-header>

    <!-- (Optional) The Footer -->
    <q-footer>
      <div class="text-caption text-center">
        Copyright &copy;Paradisias - {{ new Date().getFullYear() }}
      </div>
    </q-footer>

    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer
      v-model="leftDrawerOpen"
      color="primary-10"
      :bordered="false"
      class="bg-blue-8 text-white"
      style="max-width:250px !important"
      :width="250"
      side="left"
    >
      <div class="flex flex-center text-center q-my-md">
        <q-card
          flat
          class="bg-blue-8 text-white"
          style="max-width:250px !important"
        >
          <q-avatar>
            <q-icon
              name="home"
              size="xl"
            />
          </q-avatar>
          <h1 class="text-h4 q-mt-sm q-mb-xl">
            Paradisias Gestionnaire Hotel
          </h1>
        </q-card>
      </div>

      <q-list>
        <q-item
          v-for="link in links"
          :key="link.to"
          v-ripple
          clickable
          :to="link.to"
          exact
        >
          <q-item-section side>
            <q-icon
              size=""
              :name="link.icon"
              color="grey-2"
            />
          </q-item-section>
          <q-item-section
            class="text-weight-bold text-uppercase"
            font-size="20px"
          >
            {{ link.name }}
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const leftDrawerOpen = ref($q.platform.is.desktop)
const links = ref([
  { to: { name: 'ParadisiasHome' }, name: 'Acceuil', icon: 'mdi-home' },
  { to: { name: 'ParadisiasClients' }, name: 'Clients', icon: 'mdi-account' },
  { to: { name: 'ParadisiasRooms' }, name: 'Chambres', icon: 'mdi-bed-double' },
  { to: { name: 'ParadisiasReservations' }, name: 'Reservations', icon: 'mdi-calendar' },
  { to: { name: 'ParadisiasEmployes' }, name: 'Employés', icon: 'mdi-briefcase-account' },
  { to: { name: 'ParadisiasParametres' }, name: 'Paramètres', icon: 'mdi-cogs' },
  { to: { name: 'ParadisiasAbout' }, name: 'A propos', icon: 'mdi-help' }

])

function toggleLeftDrawer () {
  leftDrawerOpen.value = !leftDrawerOpen.value
}

</script>

<style>
.q-router-link--exact-active.q-router-link--active {
  color: white !important;
  border-left: 5px solid rgb(252, 9, 49) !important;
}
</style>
