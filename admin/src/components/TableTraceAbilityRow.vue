<template>
  <tr>
    <td>{{ trace.mitra }}</td>
    <td>{{ trace.nama }}</td>
    <td>{{ trace.lokasi }}</td>
    <td>{{ trace.cara }}</td>
    <td class="text-left">{{ formatDate(trace.tanggal) }}</td>
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
          <q-btn flat label="Ya" color="primary" v-close-popup @click="deleteTrace(trace.id)" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </tr>
</template>

<script>
import client from '@/client'

export default {
  name: 'TableTraceAbilityRow',
  props: ['trace'],
  data () {
    return {
      confirm: false
    }
  },
  methods: {
    formatDate (date) {
      return date.toString().split('T')[0]
    },
    async deleteTrace (id) {
      await client.view('allTraceAbility').deleteRow(id)
    }
  }
}
</script>

<style>

</style>
