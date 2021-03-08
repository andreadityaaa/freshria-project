<template>
  <div class="q-pa-md">
    <q-markup-table :separator="separator" flat bordered>
      <thead>
        <tr>
          <th class="text-center">Nama Lengkap</th>
          <th class="text-center">Alamat</th>
          <th class="text-center">No. Hp</th>
          <th class="text-center">No. Telp</th>
          <th class="text-center">Email</th>
          <th class="text-center">Nilai Bagi Hasil</th>
          <th class="text-center">Hapus Data</th>
        </tr>
      </thead>
      <tbody>
        <TableMitra v-for="mitra in mitras.nodes" :key="mitra.id" :mitra="mitra" />
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import TableMitra from '@/components/TableMitra'
import client from '@/client'

export default {
  name: 'Dashboard',
  components: {
    TableMitra
  },
  data () {
    return {
      mitras: {
        nodes: []
      },
      separator: 'cell'
    }
  },
  async created () {
    const { data } = await client
      .view('allMitra')
      .readRows()
      .toPromise()
    this.mitras = data
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
