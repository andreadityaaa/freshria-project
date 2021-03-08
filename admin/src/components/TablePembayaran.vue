<template>
  <div class="q-pa-md">
    <q-markup-table :separator="separator" flat bordered>
      <thead>
        <tr>
          <th class="text-center">File Bukti</th>
          <th class="text-center">Nama</th>
          <th class="text-center">Order ID</th>
          <th class="text-center">Email</th>
          <th class="text-center">Hapus Data</th>
        </tr>
      </thead>
      <tbody>
        <TablePembayaranRow v-for="pembayaran in pembayaran.nodes" :key="pembayaran.id" :pembayaran="pembayaran" />
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import TablePembayaranRow from '@/components/TablePembayaranRow'
import client from '@/client'

export default {
  name: 'TablePembayaran',
  components: {
    TablePembayaranRow
  },
  data () {
    return {
      pembayaran: {
        nodes: []
      },
      separator: 'cell'
    }
  },
  async created () {
    const { data } = await client
      .view('allPembayaran')
      .readRows()
      .toPromise()
    this.pembayaran = data
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
