<template>
  <div class="q-pa-md" style="max-width: 500px">
    <q-form
      @submit.prevent="inputKabupaten"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        outlined
        type="text"
        label="Kabupaten"
        v-model="kabupaten"
      />
      <div>
        <q-btn label="Submit" type="submit" color="primary" />
        <q-btn label="Reset" type="reset" color="primary" flat class="q-ml-sm" />
      </div>
    </q-form>
    <q-dialog
      v-model="small"
    >
      <q-card style="width: 300px">
        <q-card-section>
          <q-icon name="done" class="text-primary" style="font-size: 32px;" />
        </q-card-section>

        <q-card-section class="q-pt-none">
          Data Kabupaten Berhasil Ditambahkan
        </q-card-section>

        <q-card-actions align="right" class="bg-white text-teal">
          <q-btn flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
import client from '@/client'

export default {
  nama: 'InputKabupaten',
  data () {
    return {
      kabupaten: '',
      small: false
    }
  },
  methods: {
    async inputKabupaten () {
      const { kabupaten } = this
      const dataKabupaten = { kabupaten }
      await client.view('allKabupaten').insertRow(dataKabupaten)
        .then(() => {
          this.onReset()
          this.small = true
        })
    },
    onReset () {
      this.kabupaten = ''
    }
  }
}
</script>

<style>

</style>
