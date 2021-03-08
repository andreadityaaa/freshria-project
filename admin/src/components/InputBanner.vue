<template>
  <div class="q-pa-md" style="max-width: 400px">
    <q-form
      @submit.prevent="addBanner"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        outlined
        type="text"
        label="Nama Banner"
        v-model="namaBanner"
      />
      <q-select
        outlined
        v-model="namaMitra"
        :options="mitras"
        option-value="id"
        option-label="namaLengkap"
        map-options
        label="Nama Mitra"
      />
      <q-file
        outlined
        v-model="imageBanner"
        label="Gambar Banner (1920px x 600px)"
      >
        <template v-slot:prepend>
          <q-icon name="attach_file" />
        </template>
      </q-file>
      <q-select
        outlined
        v-model="kategoriProduk"
        :options="categories"
        option-value="id"
        option-label="nama"
        map-options
        label="Pilih Kategori"
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
          Data Banner Berhasil Ditambahkan
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
  name: 'InputBanner',
  data () {
    return {
      namaBanner: '',
      imageBanner: null,
      kategoriProduk: '',
      categories: [],
      small: false,
      namaMitra: ''
    }
  },
  computed: {
    mitras () {
      return this.$store.state.mitras
    }
  },
  methods: {
    async addBanner () {
      const url = await client.view('allBanner').upload(this.imageBanner)
      const { namaBanner } = this
      const dataBanner = { namaBanner, imageBanner: url }

      const { id } = await client.view('allBanner').insertRow(dataBanner)
      await client.view('allBanner').addRelation(id, {
        kategoriProduk: [this.kategoriProduk.id],
        namaMitra: [this.namaMitra.id]
      })
        .then(() => {
          this.onReset()
          this.small = true
        })
    },
    onReset () {
      this.namaBanner = null
      this.imageBanner = null
      this.kategoriProduk = null
      this.namaMitra = null
    }
  },
  async created () {
    this.$store.dispatch('fetchMitra')
    const { data } = await client
      .view('allKategori')
      .readRows()
      .toPromise()
    this.categories = data.nodes
    // console.log(this.mitras, '<<<<<< data mitra')
    // console.log(data)
  }
}
</script>

<style>

</style>
