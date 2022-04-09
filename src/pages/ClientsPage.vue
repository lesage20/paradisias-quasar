<template>
  <q-page>
    <!-- for desktop  -->
    <div
      class="gt-sm"
    >
      <paradisias-table
        :items="clients"
        :title="'Clients'"
        dense
      />
    </div>
    <!-- for mobiles -->
    <div class="row lt-md">
      <div class="col-xs-12 ">
        <q-toolbar>
          <q-toolbar-title>
            Clients
          </q-toolbar-title>
          <q-space />
          <span class="text-grey">
            {{ clients.length }} Clients

          </span>
        </q-toolbar>
        <q-item>
          <q-item-section
            class="text-grey-7"
            caption
          >
            Listes des clients
          </q-item-section>
        </q-item>
        <q-list separator>
          <q-item
            v-for="client in clients"
            :key="client.nom"
          >
            <q-item-section>
              <q-item-label>{{ client.nom }}  </q-item-label>
              <q-item-label
                caption
                lines="2"
              >
                {{ client.addresse }} &bullet; {{ client.numero }} &bullet; {{ client.email }}
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
const clients = ref([
  {

    nom: 'Zanou Ange Aymar',
    addresse: 'bp abidjan 316',
    anniversaire: new Date().toLocaleDateString(),
    type_piece: 'Carte d\'identité',
    nb_piece: 'C88877754',
    numero: '0787572030',
    email: 'angezanou00@gmail.com',
    genre: 'masculin'
  }, {

    nom: 'Zanou B. Grace',
    addresse: 'bp yamoussoukro 316',
    anniversaire: new Date('1999/01/26').toLocaleDateString(),
    type_piece: 'Carte d\'identité',
    nb_piece: 'C88877754',

    numero: '0747277080',
    email: 'angezanou00@gmail.com',
    genre: 'feminin'
  }
])
</script>
