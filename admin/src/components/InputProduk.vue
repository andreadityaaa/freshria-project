<template>
  <div class="q-pa-md" style="max-width: 500px">
    <q-form
      @submit.prevent="inputProduk"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        outlined
        type="text"
        label="Nama Produk"
        v-model="namaBarang"
      />
      <q-file
        outlined
        v-model="gambarBarang"
        label="Gambar Produk (565px x 800px)"
      >
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
      </q-file>
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
        type="number"
        label="Usia Produk (Bulan)"
        v-model="usiaBarang"
      />
      <q-input
        outlined
        type="text"
        label="Deskripsi Produk"
        v-model="deskripsiBarang"
      />
      <q-input
        outlined
        type="number"
        label="Harga Produk (Rp)"
        v-model="hargaBarang"
      />
      <q-input
        outlined
        type="number"
        label="Stok Produk (pcs)"
        v-model="stokBarang"
      />
      <q-input
        outlined
        type="number"
        label="Berat Produk (kg)"
        v-model="beratBarang"
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
          Data Produk Berhasil Ditambahkan
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
  name: 'InputProduk',
  data () {
    return {
      namaBarang: '',
      gambarBarang: null,
      namaMitra: '',
      usiaBarang: null,
      deskripsiBarang: '',
      hargaBarang: null,
      stokBarang: null,
      beratBarang: null,
      mitras: [],
      small: false
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
    async inputProduk () {
      const url = await client.view('allProduk').upload(this.gambarBarang)

      const {
        namaBarang,
        usiaBarang,
        deskripsiBarang,
        hargaBarang,
        stokBarang,
        beratBarang
      } = this

      const dataProduk = {
        namaBarang,
        gambarBarang: url,
        usiaBarang,
        deskripsiBarang,
        hargaBarang,
        stokBarang,
        beratBarang
      }

      const { id } = await client.view('allProduk').insertRow(dataProduk)
      await client.view('allProduk').addRelation(id, {
        namaMitra: [this.namaMitra.id]
      })
        .then(() => {
          this.onReset()
          this.small = true
        })
    },
    onReset () {
      this.namaBarang = null
      this.gambarBarang = null
      this.namaMitra = null
      this.usiaBarang = null
      this.deskripsiBarang = null
      this.hargaBarang = null
      this.stokBarang = null
      this.beratBarang = null
    }
  }
}
</script>

<style>

</style>
