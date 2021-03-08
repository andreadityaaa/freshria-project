<template>
  <div class="q-pa-md" style="max-width: 500px">
    <q-form
      @submit.prevent="inputKelurahan"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        outlined
        type="text"
        label="Kelurahan"
        v-model="kelurahan"
      />
      <q-select
        outlined
        v-model="kecamatanId"
        :options="kecamatan"
        option-value="id"
        option-label="kecamatan"
        map-options
        label="Pilih Kecamatan"
      />
      <q-input
        outlined
        type="number"
        label="Ongkos Kirim (Rp)"
        v-model="ongkosKirim"
      />
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
          Data Kelurahan Berhasil Ditambahkan
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
  nama: 'Inputkecamatan',
  data () {
    return {
      kelurahan: '',
      kecamatan: [],
      kecamatanId: '',
      ongkosKirim: '',
      small: false
    }
  },
  async created () {
    const { data } = await client
      .view('allKecamatan')
      .readRows()
      .toPromise()
    this.kecamatan = data.nodes
  },
  methods: {
    async inputKelurahan () {
      const { kelurahan, ongkosKirim } = this
      const dataKelurahan = { kelurahan, ongkosKirim }
      const { id } = await client.view('allKelurahan').insertRow(dataKelurahan)
      await client.view('allKelurahan').addRelation(id, {
        kecamatanId: [this.kecamatanId.id]
      })
        .then(() => {
          this.onReset()
          this.small = true
        })
    },
    onReset () {
      this.kecamatan = ''
      this.kecamatanId = ''
      this.ongkosKirim = ''
    }
  }
}
</script>

<style>

</style>
