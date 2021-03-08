<template>
  <div class="q-pa-md" style="max-width: 500px">
    <q-form
      @submit.prevent="InputMitra"
      @reset="onReset"
      class="q-gutter-md"
    >
      <q-input
        outlined
        type="text"
        label="Nama Lengkap"
        v-model="namaLengkap"
      />
      <q-input
        outlined
        type="text"
        label="Alamat"
        v-model="alamat"
      />
      <q-input
        outlined
        type="number"
        label="No Hp"
        v-model="noHp"
      />
      <q-input
        outlined
        type="number"
        label="No Telepon"
        v-model="noTelp"
      />
      <q-input
        outlined
        type="email"
        label="Email"
        v-model="email"
      />
      <q-input
        outlined
        type="number"
        label="Nilai Bagi Hasil (%)"
        v-model="nilaiBagiHasil"
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
          Data Mitra Berhasil Ditambahkan
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
  name: 'RegisterMitra',
  data () {
    return {
      dense: true,
      namaLengkap: '',
      alamat: '',
      noHp: '',
      noTelp: '',
      email: '',
      nilaiBagiHasil: '',
      small: false
    }
  },
  methods: {
    async InputMitra () {
      const {
        namaLengkap,
        alamat,
        noTelp,
        noHp,
        email,
        nilaiBagiHasil
      } = this

      const dataMitra = {
        namaLengkap,
        alamat,
        noTelp,
        noHp,
        email,
        nilaiBagiHasil
      }
      await client.view('allMitra').insertRow(dataMitra)
        .then(() => {
          this.onReset()
          this.small = true
        })
    },
    onReset () {
      this.namaLengkap = ''
      this.alamat = ''
      this.noTelp = ''
      this.noHp = ''
      this.email = ''
      this.nilaiBagiHasil = ''
    }
  }
}
</script>

<style>

</style>
