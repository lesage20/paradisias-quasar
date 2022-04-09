<template>
  <q-dialog
    v-model="ajout"
  >
    <q-card style="max-width: 1000px">
      <q-card-section>
        <div class="text-h6">
          Ajouter un(e) {{ title }}
        </div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <q-form
          @submit="onSubmit"
          @reset="onReset"
        >
          <div
            class="row justify-between"
          >
            <div
              v-for="field in fields"
              :key="field.name"
              class="col-xs-12 col-md-6 q-px-sm"
            >
              <q-input
                v-model="name"

                :label="field.name"
                hint="Name and surname"
                lazy-rules
              />
            </div>
          </div>
        </q-form>
      </q-card-section>

      <q-card-actions
        align="right"
        class="text-primary"
      >
        <q-btn
          v-close-popup
          flat
          label="Cancel"
        />
        <q-btn
          v-close-popup
          flat
          label="Ajouter"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
  <div class="q-pa-md">
    <q-table
      v-model:selected="selected"
      :filter="search"
      :rows="props.items"
      :columns="props.columns.length ? props.columns : columns"
      row-key="name"
      :loading="false"
      dense
    >
      <template #top>
        <div class="col-xs-12">
          <div class="row justify-between">
            <div class="col-xs-8">
              <h2 class="text-h5 q-my-sm">
                {{ title }}
              </h2>
            </div>

            <div class="col-xs-4 q-my-sm">
              <q-input
                v-model="search"
                borderless
                placeholder="Rechercher..."
                dense
                debounce="300"
                color="primary"
              >
                <template #append>
                  <q-icon name="search" />
                </template>
              </q-input>
            </div>
          </div>
        </div>
        <div
          v-if="props.actions"
          class="col-xs-12"
        >
          <div class="row justify-between">
            <div class="col">
              <q-btn
                round
                flat
                color="grey"
                icon="delete"
                class="q-ml-sm"
                :disable="loading"
                @click="removeRow"
              />
              <q-btn
                flat
                color="grey"
                round
                icon="mdi-check-all"
                class="q-ml-sm"
                :disable="loading"
                @click="removeRow"
              />
            </div>
            <div class="col-shrink">
              <q-btn
                color="primary"
                :disable="loading"
                label="Ajouter"
                @click="ajouter"
              />
            </div>
          </div>
        </div>
      </template>

      <template #body-cell-actions>
        <q-td>
          <div class="row justify-between">
            <div class="col">
              <q-btn
                flat
                color="blue"
                icon="mdi-pen"
                round
                size="sm"
                class="q-mr-sm"
                @click="modifier"
              />
            </div>
            <div class="col">
              <q-btn
                flat
                color="red"
                icon="mdi-delete"
                size="sm"
                round
                @click="supprimer"
              />
            </div>
          </div>
        </q-td>
      </template>

      <template #loading>
        <q-inner-loading
          showing
          color="primary"
        />
      </template>
    </q-table>
    <div
      v-if="false"
      class="row justify-center q-mt-md"
    >
      <q-pagination
        v-model="pagination.page"
        color="accent"
        :max="pagesNumber"
        size="md"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    default: () => { return [] }
  },
  columns: {
    type: Array,
    default: () => { return [] }
  },
  title: {
    type: String,
    required: true
  },
  actions: {
    type: Boolean,
    default: true
  }
})
const columns = ref([])
const fields = ref([])

if (props.items.length) {
  const colNames = Object.keys(props.items[0])
  for (const col of colNames) {
    const newCol = Object.assign({}, {
      name: col,
      required: true,
      label: col,
      align: 'left',
      field: row => row[col],
      format: val => `${val}`,
      sortable: true
    })
    columns.value.push(newCol)
  }
  fields.value = [...columns.value]
  if (props.actions) {
    columns.value.push({ name: 'actions', label: 'Actions' })
  }
}

console.log(props)

//  pagination.value

const pagination = ref({
  sortBy: 'desc',
  descending: false,
  page: 1,
  rowsPerPage: 7
  // rowsNumber: xx if getting data from a server
})
const pagesNumber = computed(() => Math.ceil(props.items.length / pagination.value.rowsPerPage))

// fonctionnalité de recherche
const search = ref('')

//  fonctionnalité
const selected = ref([])
const emits = defineEmits(['supprimer', 'modifier', 'ajouter'])

function supprimer () {
  emits('supprimer')
}

function modifier () {
  emits('modifier')
}

const ajout = ref(false)

function ajouter () {
  ajout.value = true
  emits('ajouter')
}

</script>

<style>

.q-table__top.relative-position.row.items-center {
  display: flex;
  justify-content: space-between !important;

}
</style>
