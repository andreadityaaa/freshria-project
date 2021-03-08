<template>
  <div class="q-pa-md">
    <q-markup-table :separator="separator" flat bordered>
      <thead>
        <tr>
          <th class="text-center">Kabupaten</th>
          <th class="text-center">Kecamatan</th>
          <th class="text-center">Kelurahan</th>
          <th class="text-center">Ongkos Kirim</th>
          <th class="text-center">Hapus Data</th>
        </tr>
      </thead>
      <tbody>
        <TableDataLokasiRow v-for="kelurahan in kelurahan.nodes" :key="kelurahan.id" :kelurahan="kelurahan" />
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import client from '@/client'
import TableDataLokasiRow from '@/components/TableDataLokasiRow.vue'

export default {
  name: 'TableDataLokasi',
  components: {
    TableDataLokasiRow
  },
  data () {
    return {
      kelurahan: {
        nodes: []
      },
      separator: 'cell'
    }
  },
  async created () {
    const { data } = await client
      .view('allKelurahan')
      .readRows()
      .toPromise()
    this.kelurahan = data
  }
}
</script>

<style>

</style>
