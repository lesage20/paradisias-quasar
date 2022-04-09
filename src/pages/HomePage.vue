<template>
  <q-page>
    <div class="row justify-start ">
      <div class="col-xs-12 col-sm-6 col-lg-4 q-pa-sm">
        <q-card>
          <h2 class="text-subtitle2 q-px-md q-py-sm q-ma-none">
            Reservations
          </h2>
          <q-separator inset />
          <q-card-section>
            <apexchart
              width="300"
              type="donut"
              :options="options"
              :series="series"
            />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4 q-pa-sm">
        <q-card>
          <h2 class="text-subtitle2 q-px-md q-py-sm q-ma-none">
            Reservations Selon Type de Chambres
          </h2>
          <q-separator inset />
          <q-card-section>
            <apexchart
              width="300"
              type="donut"
              :options="typeOptions"
              :series="series"
            />
          </q-card-section>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-6 col-lg-4 q-pa-sm">
        <q-card>
          <h2 class="text-subtitle2 q-px-md q-py-sm q-ma-none">
            Etat Des Chambres
          </h2>
          <q-separator inset />
          <q-card-section>
            <apexchart
              width="300"
              type="donut"
              :options="etatOptions"
              :series="series"
            />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
// import ParadisiasTable from 'src/components/ParadisiasTable.vue'
const options = {
  chart: {
    id: 'vuechart-example'
  },

  labels: ['Vérifié', 'Nouvelle', 'Soldé'],
  dataLabels: {
    formatter () {
      // const name = opts.w.globals.labels[opts.seriesIndex]
      return []
    }
  }

}
const typeOptions = {
  chart: {
    id: 'vuechart-example'
  },

  labels: ['Senior', 'Junior', 'Mini Suite'],
  dataLabels: {
    formatter () {
      // const name = opts.w.globals.labels[opts.seriesIndex]
      return []
    }
  }

}
const etatOptions = {
  chart: {
    id: 'vuechart-example'
  },

  labels: ['Propre', 'Sale', 'Nettoyage'],
  dataLabels: {
    formatter () {
      // const name = opts.w.globals.labels[opts.seriesIndex]
      return []
    }
  }

}
const series = [30, 40, 45]
</script>
