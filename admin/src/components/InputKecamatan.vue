<template>
  <div class="q-pa-md" style="max-width: 500px">
    <q-form
      @submit.prevent="inputKecamatan"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        outlined
        type="text"
        label="Kecamatan"
        v-model="kecamatan"
      />
      <q-select
        outlined
        v-model="kabupatenId"
        :options="kabupaten"
        option-value="id"
        option-label="kabupaten"
        map-options
        label="Pilih Kabupaten"
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
          Data Kecamatan Berhasil Ditambahkan
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
  nama: 'InputKecamatan',
  data () {
    return {
      kecamatan: '',
      kabupaten: [],
      kabupatenId: '',
      small: false
    }
  },
  async created () {
    const { data } = await client
      .view('allKabupaten')
      .readRows()
      .toPromise()
    this.kabupaten = data.nodes
  },
  methods: {
    async inputKecamatan () {
      const { kecamatan } = this
      const dataKecamatan = { kecamatan }
      const { id } = await client.view('allKecamatan').insertRow(dataKecamatan)
      await client.view('allKecamatan').addRelation(id, {
        kabupatenId: [this.kabupatenId.id]
      })
        .then(() => {
          this.onReset()
          this.small = true
        })
    },
    onReset () {
      this.kecamatan = ''
      this.kabupatenId = ''
    }
  }
}
</script>

<style>

</style>
