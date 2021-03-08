<template>
  <div class="q-pa-md">
    <q-markup-table :separator="separator" flat bordered>
      <thead>
        <tr>
          <th class="text-center">Gambar Produk</th>
          <th class="text-center">Nama Produk</th>
          <th class="text-center">Nama Mitra</th>
          <th class="text-center">Usia Produk (bln)</th>
          <th class="text-center">Deskripsi Produk</th>
          <th class="text-center">Harga Produk</th>
          <th class="text-center">Stok Produk (pcs)</th>
          <th class="text-center">Berat Produk (kg)</th>
          <th class="text-center">Hapus Data</th>
        </tr>
      </thead>
      <tbody>
        <TableProdukRow v-for="produk in produks.nodes" :key="produk.id" :produk="produk" />
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import TableProdukRow from '@/components/TableProdukRow'
import client from '@/client'

export default {
  name: 'TableProduk',
  components: {
    TableProdukRow
  },
  data () {
    return {
      produks: {
        nodes: []
      },
      separator: 'cell'
    }
  },
  async created () {
    const { data } = await client
      .view('allProduk')
      .readRows()
      .toPromise()
    this.produks = data
  },
  beforeRouteEnter (to, from, next) {
    if (window.localStorage.token) {
      next()
    } else {
      next('/login')
    }
  }
}
</script>

<style>

</style>
