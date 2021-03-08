<template>
  <tr>
    <td></td>
    <td></td>
    <td>{{ kelurahan.kelurahan }}</td>
    <td>Rp {{ thousandFormat(kelurahan.ongkosKirim) }}</td>
    <td>
      <div class="q-pa-md q-gutter-sm row items-center">
        <q-btn round color="red" icon="delete" size="sm" @click="confirm = true" />
      </div>
    </td>
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="delete_forever" color="red" text-color="white" />
          <span class="q-ml-sm">Apakah anda yakin menghapus data ini?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Tidak" color="primary" v-close-popup />
          <q-btn flat label="Ya" color="primary" v-close-popup @click="deleteProduk(produk.id)" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </tr>
</template>

<script>
import client from '@/client'

export default {
  name: 'TableDataLokasiRow',
  props: ['kelurahan'],
  data () {
    return {
      confirm: false,
      kecamatan: ''
    //   kelurahan: []
    }
  },
  async created () {
    // const kabupatenId = this.kabupaten
    const { data } = await client
      .view('allKecamatan')
      .readRows()
      .toPromise()
    this.kecamatan = data.nodes
    // for (const dataKelurahan of data.nodes) {
    //   const { data: kelurahans } = await client
    //     .view('allKelurahan')
    //     .readRow(dataKelurahan.kecamatanId.id)
    //     .toPromise()
    //   this.kelurahan = kelurahans
    // }
    console.log(this.kecamatan, '<<<<< kecamatan')
    // console.log(this.kelurahan, '<<<<< kelurahan')
    // console.log(data, '<<<<<<<')
  },
  methods: {
    async deleteProduk (id) {
      await client.view('allKabupaten').deleteRow(id)
    },
    thousandFormat (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    }
  }
}
</script>

<style>

</style>
