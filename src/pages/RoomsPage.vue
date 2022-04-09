<template>
  <q-page>
    <div class="row gt-sm">
      <div class="col-xs-12 col-md-6">
        <paradisias-table
          :items="chambresDispo"
          :actions="false"
          :title="'Chambres disponbles'"
        />
      </div>
      <div class="col-xs-12 col-md-6">
        <paradisias-table
          :items="chambresOccup"
          :actions="false"
          :title="'Chambres occupées'"
        />
      </div>
      <div class="col-xs-12">
        <paradisias-table
          :items="chambres"
          :title="'Chambres'"
        />
      </div>
    </div>

    <div class="row lt-md">
      <div class="col-xs-12 ">
        <q-toolbar>
          <q-toolbar-title>
            Chambres
          </q-toolbar-title>
          <q-space />
          <span class="text-grey">
            {{ chambres.length }} chambres

          </span>
        </q-toolbar>
        <q-item>
          <q-item-section
            class="text-grey-7"
            caption
          >
            Listes des chambres tout type confondu vous pouvez chercher dans la liste
          </q-item-section>
        </q-item>
        <q-list separator>
          <q-item
            v-for="chambre in chambres"
            :key="chambre.nom"
          >
            <q-item-section

              avatar
            >
              <q-avatar
                v-if="chambre.type == 'junior'"
                color="primary"
                text-color="white"
              >
                {{ chambre.nom }}
              </q-avatar>
              <q-avatar
                v-else-if="chambre.type == 'senior'"

                color="pink-8"
                text-color="white"
              >
                {{ chambre.nom }}
              </q-avatar>
              <q-avatar
                v-else
                color="dark"
                text-color="yellow"
              >
                {{ chambre.nom }}
              </q-avatar>
            </q-item-section>

            <q-item-section>
              <q-item-label>Chambre {{ chambre.nom }}</q-item-label>
              <q-item-label
                caption
                lines="2"
              >
                {{ chambre.type }} &bullet; {{ chambre.prix }}fcfa
              </q-item-label>
            </q-item-section>

            <q-item-section
              side
              top
            >
              <q-item-label caption>
                <q-chip
                  v-if="chambre.statut == 'Disponible'"
                  color="positive"
                  text-color="white"
                  size="sm"
                >
                  {{ chambre.statut }}
                </q-chip>
                <q-chip
                  v-else
                  color="negative"
                  text-color="white"
                  size="sm"
                >
                  {{ chambre.statut }}
                </q-chip> <br>
                <q-btn
                  icon="mdi-pencil"
                  flat
                  size="sm"
                  round
                />
                <q-btn
                  icon="mdi-delete"
                  flat
                  size="sm"
                  round
                />
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
          color="purple"
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
import { ref, computed } from 'vue'
import ParadisiasTable from 'src/components/ParadisiasTable.vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
function searchDialog () {
  $q.dialog({ persistent: true, prompt: {}, title: 'Rechercher une chambre', position: 'bottom', class: 'text-center', style: 'border-top-left-radius: 30px; border-top-right-radius: 30px' })
}
const chambres = ref([
  {
    nom: 'B1',
    type: 'junior',
    prix: 12500,
    statut: 'Occupée'
  },
  {
    nom: 'B2',
    type: 'junior',
    prix: 12500,
    statut: 'Disponible'
  },
  {
    nom: 'B3',
    type: 'junior',
    prix: 12500,
    statut: 'Occupée'
  },
  {
    nom: 'B4',
    type: 'junior',
    prix: 12500,
    statut: 'Disponible'
  },
  {
    nom: 'C5',
    type: 'junior',
    prix: 12500,
    statut: 'Disponible'
  },
  {
    nom: 'C6',
    type: 'junior',
    prix: 12500,
    statut: 'Occupée'
  },
  {
    nom: 'C8',
    type: 'junior',
    prix: 12500,
    statut: 'Occupée'
  },
  {
    nom: 'D10',
    type: 'senior',
    prix: 15000,
    statut: 'Occupée'
  },
  {
    nom: 'D11',
    type: 'senior',
    prix: 15000,
    statut: 'Disponible'
  },
  {
    nom: 'D12',
    type: 'senior',
    prix: 15000,
    statut: 'Occupée'
  },
  {
    nom: 'D13',
    type: 'senior',
    prix: 15000,
    statut: 'Occupée'
  },
  {
    nom: 'D14',
    type: 'senior',
    prix: 15000,
    statut: 'Occupée'
  },
  {
    nom: 'D15',
    type: 'senior',
    prix: 15000,
    statut: 'Disponible'
  },
  {
    nom: 'D9',
    type: 'mini-suite',
    prix: 25000,
    statut: 'Disponible'
  },
  {
    nom: 'D16',
    type: 'mini-suite',
    prix: 25000,
    statut: 'Disponible'
  }
])
const chambresDispo = computed(() => chambres.value.filter(chambre => chambre.statut === 'Disponible'))
const chambresOccup = computed(() => chambres.value.filter(chambre => chambre.statut === 'Occupée'))

</script>
