<template>
  <div class="q-pa-md">
    <q-markup-table :separator="separator" flat bordered>
      <thead>
        <tr>
          <th class="text-center">Nama Mitra</th>
          <th class="text-center">Tanaman / Ternak</th>
          <th class="text-center">Lokasi Penanaman / Ternak</th>
          <th class="text-center">Cara Penanaman / Ternak</th>
          <th class="text-center">Tanggal Prediksi Panen</th>
          <th class="text-center">Hapus Data</th>
        </tr>
      </thead>
      <tbody>
        <TableTraceAbilityRow v-for="trace in traces.nodes" :key="trace.id" :trace="trace" />
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import TableTraceAbilityRow from '@/components/TableTraceAbilityRow'
import client from '@/client'

export default {
  name: 'TableTraceAbility',
  components: {
    TableTraceAbilityRow
  },
  data () {
    return {
      traces: {
        nodes: []
      },
      separator: 'cell'
    }
  },
  async created () {
    const { data } = await client
      .view('allTraceAbility')
      .readRows()
      .toPromise()
    this.traces = data
    console.log(data)
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
