<template>
  <q-page>
    <div class="row gt-sm">
      <div class="col-xs-12 ">
        <paradisias-table
          title="Reservations"
          :items="reservations"
          :columns="columns"
        />
      </div>
    </div>
    <!-- for mobiles -->
    <div class="row lt-md">
      <div class="col-xs-12 ">
        <q-toolbar>
          <q-toolbar-title>
            Reservations
          </q-toolbar-title>
          <q-space />
          <span class="text-grey">
            {{ reservations.length }} reservations

          </span>
        </q-toolbar>
        <q-item>
          <q-item-section
            class="text-grey-7"
            caption
          >
            Listes de reservations
          </q-item-section>
        </q-item>
        <q-list separator>
          <q-item
            v-for="reservation in reservations"
            :key="reservation.reference"
          >
            <q-item-section>
              <q-item-label>{{ reservation.reference }} par {{ reservation.client.nom }}  </q-item-label>
              <q-item-label
                caption
                lines="2"
              >
                {{ reservation.chambre.nom }} ({{ reservation.chambre.type }}) &bullet; {{ reservation.chambre.prix }}
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

const reservations = ref([
  {
    id: '1',
    reference: 'PARES123',
    client: {

      nom: 'Zanou Ange Aymar',
      addresse: 'Bp abidjan 316',
      anniversaire: new Date().toLocaleDateString(),
      type_piece: 'Carte d\'identité',
      nb_piece: 'C88877754',

      numero: '0787572030',
      email: 'angezanou00@gmail.com',
      genre: 'masculin'
    },
    chambre: {
      nom: 'D16',
      type: 'mini-suite',
      prix: 25000,
      statut: 'Disponible'
    },
    dateEnt: new Date('2022/03/28').toLocaleDateString(),
    dateSort: new Date('2022/03/30').toLocaleDateString(),
    statut: 'non verifiée'
  }, {
    id: '2',
    reference: 'PARES234',
    client: {

      nom: 'Zanou B. Grace',
      addresse: 'bp yamoussoukro 316',
      anniversaire: new Date('1999/01/26').toLocaleDateString(),
      type_piece: 'Carte d\'identité',
      nb_piece: 'C88877754',

      numero: '0747277080',
      email: 'angezanou00@gmail.com',
      genre: 'feminin'
    },
    chambre: {
      nom: 'D15',
      type: 'senior',
      prix: 15000,
      statut: 'Disponible'
    },
    dateEnt: new Date('2022/03/28').toLocaleDateString(),
    dateSort: new Date('2022/03/30').toLocaleDateString(),
    statut: 'non verifiée'
  }, {
    id: '1',
    reference: 'PARES123',
    client: {

      nom: 'Zanou Ange Aymar',
      addresse: 'Bp abidjan 316',
      anniversaire: new Date().toLocaleDateString(),
      type_piece: 'Carte d\'identité',
      nb_piece: 'C88877754',

      numero: '0787572030',
      email: 'angezanou00@gmail.com',
      genre: 'masculin'
    },
    chambre: {
      nom: 'B1',
      type: 'senior',
      prix: 15000,
      statut: 'Disponible'
    },
    dateEnt: new Date('2022/03/28').toLocaleDateString(),
    dateSort: new Date('2022/03/30').toLocaleDateString(),
    statut: 'non verifiée'
  }, {
    id: '1',
    reference: 'PARES123',
    client: {

      nom: 'Zanou Ange Aymar',
      addresse: 'Bp abidjan 316',
      anniversaire: new Date().toLocaleDateString(),
      type_piece: 'Carte d\'identité',
      nb_piece: 'C88877754',

      numero: '0787572030',
      email: 'angezanou00@gmail.com',
      genre: 'masculin'
    },
    chambre: {
      nom: 'D16',
      type: 'mini-suite',
      prix: 25000,
      statut: 'Disponible'
    },
    dateEnt: new Date('2022/03/28').toLocaleDateString(),
    dateSort: new Date('2022/03/30').toLocaleDateString(),
    statut: 'non verifiée'
  }, {
    id: '1',
    reference: 'PARES123',
    client: {

      nom: 'Zanou B. Grace',
      addresse: 'bp yamoussoukro 316',
      anniversaire: new Date('1999/01/26').toLocaleDateString(),
      type_piece: 'Carte d\'identité',
      nb_piece: 'C88877754',

      numero: '0747277080',
      email: 'angezanou00@gmail.com',
      genre: 'feminin'
    },
    chambre: {
      nom: 'D16',
      type: 'mini-suite',
      prix: 25000,
      statut: 'Disponible'
    },
    dateEnt: new Date('2022/03/28').toLocaleDateString(),
    dateSort: new Date('2022/03/30').toLocaleDateString(),
    statut: 'non verifiée'
  }
])

const columns = ref([
  {
    name: 'id',
    required: true,
    label: 'id',
    align: 'left',
    field: row => row.id,
    format: val => `${val}`,
    sortable: true
  }, {
    name: 'reference',
    required: true,
    label: 'reference',
    align: 'left',
    field: row => row.reference,
    format: val => `${val}`,
    sortable: true
  }, {
    name: 'client',
    required: true,
    label: 'client',
    align: 'left',
    field: row => row.client.nom,
    format: val => `${val}`,
    sortable: true
  }, {
    name: 'chambre',
    required: true,
    label: 'chambre',
    align: 'left',
    field: row => `${row.chambre.nom} ( ${row.chambre.type} )`,
    format: val => `${val}`,
    sortable: true
  }, {
    name: 'dateEnt',
    required: true,
    label: 'date entrée',
    align: 'left',
    field: row => row.dateEnt,
    format: val => `${val}`,
    sortable: true
  }, {
    name: 'dateSort',
    required: true,
    label: 'dateSort',
    align: 'left',
    field: row => row.dateSort,
    format: val => `${val}`,
    sortable: true
  }, {
    name: 'statut',
    required: true,
    label: 'statut',
    align: 'left',
    field: row => row.statut,
    format: val => `${val}`,
    sortable: true
  }
])
</script>
