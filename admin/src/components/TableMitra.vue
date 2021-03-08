<template>
  <tr>
    <td>{{ mitra.namaLengkap }}</td>
    <td>{{ mitra.alamat }}</td>
    <td>0{{ mitra.noHp }}</td>
    <td>{{ mitra.noTelp }}</td>
    <td>{{ mitra.email }}</td>
    <td class="text-center">{{ mitra.nilaiBagiHasil }} %</td>
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
          <q-btn flat label="Ya" color="primary" v-close-popup @click="deleteMitra(mitra.id)" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </tr>
</template>

<script>
import client from '@/client'

export default {
  name: 'TableMitra',
  props: ['mitra'],
  data () {
    return {
      confirm: false
    }
  },
  methods: {
    async deleteMitra (id) {
      await client.view('allMitra').deleteRow(id)
    }
  }
}
</script>

<style>
div {
  justify-content: center;
}
</style>
