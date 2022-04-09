<template>
  <q-page padding>
    <div class="row gt-sm">
      <div class="col-xs-12 ">
        <paradisias-table
          :items="employes"
          :title="'Employés'"
        />
      </div>
    </div>
    <!-- for mobiles -->
    <div class="row lt-md">
      <div class="col-xs-12 ">
        <q-toolbar>
          <q-toolbar-title>
            Employés
          </q-toolbar-title>
          <q-space />
          <span class="text-grey">
            {{ employes.length }} Employés

          </span>
        </q-toolbar>
        <q-item>
          <q-item-section
            class="text-grey-7"
            caption
          >
            Listes d'employés
          </q-item-section>
        </q-item>
        <q-list separator>
          <q-item
            v-for="employe in employes"
            :key="employe.nom"
          >
            <q-item-section>
              <q-item-label>{{ employe.nom }}  </q-item-label>
              <q-item-label
                caption
                lines="2"
              >
                {{ employe.role }} &bullet; {{ employe.numero }} &bullet; {{ employe.email }}
              </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>

      <q-page-sticky
        position="bottom-right"
        :offset="[18, 18]"
        class="lt-md"
      >
        <q-fab
          color="blue-9"
          direction="up"
        >
          <template #icon="{ opened }">
            <q-icon
              :class="{ 'example-fab-animate--hover': opened !== true }"
              name="keyboard_arrow_up"
            />
          </template>

          <template #active-icon="{ opened }">
            <q-icon
              :class="{ 'example-fab-animate': opened === true }"
              name="close"
            />
          </template>

          <q-fab-action
            color="teal"
            external-label
            @click="onClick"
          >
            <template #icon>
              <q-icon name="add" />
            </template>
          </q-fab-action>

          <q-fab-action
            color="secondary"
            external-label
            icon="search"
            @click="searchDialog"
          />
        </q-fab>
      </q-page-sticky>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import ParadisiasTable from 'src/components/ParadisiasTable.vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
function searchDialog () {
  $q.dialog({ persistent: true, attrs: { 'append-icon': 'search' }, prompt: { outlined: true, rounded: true, dense: false }, title: 'Rechercher un client', position: 'bottom', class: 'text-center', style: 'border-top-left-radius: 30px; border-top-right-radius: 30px' })
}

const employes = ref([
  {
    nom: 'Le Sage',
    email: 'angezanou00@gmail.com',
    numero: '0787572030',
    password: 'password',
    role: 'administrateur'
  },
  {
    nom: 'Zanou Grace',
    email: 'gracezanou00@gmail.com',
    numero: '0787572030',
    password: 'password',
    role: 'comptable'
  },
  {
    nom: 'Zanou Esperance',
    email: 'esperance@gmail.com',
    numero: '0787572030',
    password: 'password',
    role: 'secretaire'
  },
  {
    nom: 'Zannou Lysette',
    email: 'angezao00@gmail.com',
    numero: '0787572030',
    password: 'password',
    role: 'strategie marketing'
  }
])
</script>
