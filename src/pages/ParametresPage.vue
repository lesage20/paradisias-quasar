<template>
  <q-page
    padding
    class="container"
  >
    <div class="row justify-center">
      <div class="col-xs-12 col-md-6 ">
        <q-card>
          <q-card-section>
            <h1 class="text-h5">
              Paramètres
            </h1>
          </q-card-section>
          <q-list>
            <q-item>
              <q-item-section>
                <q-item-label>
                  Mode nuit
                </q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-toggle
                  v-model="night"
                  @click="toggleNightMode"
                />
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

const $q = useQuasar()
const night = ref($q.dark.mode)
function toggleNightMode () {
  $q.dark.set(night.value)
}
</script>
