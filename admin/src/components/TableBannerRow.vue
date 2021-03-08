<template>
  <tr>
    <td>
      <div class="col-4">
        <q-img
          :src="banner.imageBanner"
          style="height: 46px; max-width: 150px"
        />
      </div>
    </td>
    <td>{{ banner.namaBanner }}</td>
    <td>{{ banner.mitra }}</td>
    <td>{{ banner.namaKategori }}</td>
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
          <q-btn flat label="Ya" color="primary" v-close-popup @click="deleteBanner(banner.id)" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </tr>
</template>

<script>
import client from '@/client'

export default {
  name: 'TableBannerRow',
  props: ['banner'],
  data () {
    return {
      confirm: false
    }
  },
  methods: {
    async deleteBanner (id) {
      await client.view('allBanner').deleteRow(id)
    }
  }
}
</script>

<style>
div {
  justify-content: center;
}
</style>
