<template>
  <tr>
    <td>
      <div class="col-4">
        <q-img
          :src="pembayaran.fileBukti"
          style="height: 105px; max-width: 106px"
        />
      </div>
    </td>
    <td>{{ pembayaran.nama }}</td>
    <td>#{{ pembayaran.orderId }}</td>
    <td>{{ pembayaran.email }}</td>
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
          <q-btn flat label="Ya" color="primary" v-close-popup @click="deleteProduk(pembayaran.id)" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </tr>
</template>

<script>
import client from '@/client'

export default {
  name: 'TablePembayaranRow',
  props: ['pembayaran'],
  data () {
    return {
      confirm: false
    }
  },
  methods: {
    thousandFormat (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    async deleteProduk (id) {
      await client.view('allPembayaran').deleteRow(id)
    }
  }
}
</script>

<style>
.my-table-details {
  font-size: 0.85em;
  font-style: italic;
  max-width: 1000px;
  white-space: normal;
  margin-top: 8px;
}
</style>
