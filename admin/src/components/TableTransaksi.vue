<template>
  <div class="q-pa-md">
    <q-markup-table :separator="separator" flat bordered>
      <thead>
        <tr>
          <th class="text-center">Gambar Produk</th>
          <th class="text-center">Nama Produk</th>
          <th class="text-center">Data Customer</th>
          <th class="text-center">Kuantiti (kg)</th>
          <th class="text-center">Harga Barang</th>
          <th class="text-center">Total</th>
          <th class="text-center">Status Transaksi</th>
          <th class="text-center">Rubah Status Transaksi</th>
        </tr>
      </thead>
      <tbody>
        <TableTransaksiRow v-for="transaksi in allTransaksi.nodes" :key="transaksi.id" :transaksi="transaksi" />
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import TableTransaksiRow from '@/components/TableTransaksiRow'
import client from '@/client'

export default {
  name: 'TableTransaksi',
  components: {
    TableTransaksiRow
  },
  data () {
    return {
      allTransaksi: {
        nodes: []
      },
      separator: 'cell'
    }
  },
  async created () {
    const { data } = await client
      .view('allKeranjang')
      .readRows()
      .toPromise()
    this.allTransaksi = data
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
