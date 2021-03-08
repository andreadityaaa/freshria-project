<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form
      @submit.prevent="addTrace"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-select
        outlined
        v-model="namaMitra"
        :options="mitras"
        option-value="id"
        option-label="namaLengkap"
        map-options
        label="Nama Mitra"
      />
      <q-input
        outlined
        type="text"
        label="Nama Tanaman / Ternak"
        v-model="nama"
      />
      <q-input
        outlined
        type="text"
        label="Lokasi Penanaman / Ternak"
        v-model="lokasi"
      />
      <q-select
        outlined
        v-model="cara"
        :options="options"
        label="Cara Penanaman / Ternak"
      />
      <q-input label="Tanggal Prediksi Panen" filled v-model="tanggal" mask="date" :rules="['date']">
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy ref="qDateProxy" transition-show="scale" transition-hide="scale">
              <q-date v-model="tanggal">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
    <q-dialog
      v-model="small"
    >
      <q-card style="width: 300px">
        <q-card-section>
          <q-icon name="done" class="text-primary" style="font-size: 32px;" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          Data Trace Ability Berhasil Ditambahkan
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import client from '@/client'
export default {
  name: 'TraceAbility',
  data () {
    return {
      namaMitra: null,
      mitras: '',
      nama: '',
      lokasi: '',
      cara: '',
      tanggal: null,
      small: false,
      options: [
        'Manual', 'Hidroponik'
      ]
    }
  },
  async created () {
    const { data } = await client
      .view('allMitra')
      .readRows()
      .toPromise()
    this.mitras = data.nodes
  },
  methods: {
    async addTrace () {
      const { nama, lokasi, cara, tanggal } = this
      const dataTrace = { nama, lokasi, cara, tanggal }

      const { id } = await client.view('allTraceAbility').insertRow(dataTrace)
      await client.view('allTraceAbility').addRelation(id, {
        namaMitra: [this.namaMitra.id]
      })
        .then(() => {
          this.onReset()
          this.small = true
        })
    },
    onReset () {
      this.namaMitra = ''
      this.nama = ''
      this.lokasi = ''
      this.cara = ''
      this.tanggal = ''
    }
  }
}
</script>

<style>

</style>
