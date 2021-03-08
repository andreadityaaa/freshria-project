<template>
  <div class="justify-content-center align-items-center container" style="width: 50%;"><br>
    <div class="d-flex align-items-center justify-content-center">
      <button @click="toUser" type="button" class="btn text-right text-white" style="background-color: #0271B8;">Kembali</button>
    </div><br>
    <section id="addPage" class="row align-items-center"><br>
      <div class="card">
        <div class="card-body">
        <form @submit.prevent="confirmPayment">
          <div class="form-group">
            <label for="name">Order ID</label>
            <input type="number" class="form-control" v-model="orderId">
          </div>
          <div class="form-group">
             <label for="imageUrl">Nama</label>
            <input type="text" class="form-control" v-model="nama">
          </div>
          <div class="form-group">
            <label for="name">Email</label>
            <input type="email" class="form-control" v-model="email">
          </div>
          <div class="form-group">
            <label for="exampleFormControlFile1">Upload Bukti Pembayaran</label>
            <input type="file" class="form-control-file" id="fileBukti">
          </div>
          <button type="submit" class="btn btn-block text-white" style="background-color: #0271B8;">Kirim</button>
        </form>
        </div>
      </div>
    </section>
    <div>
      <b-modal ref="my-modal" hide-footer>
      <div class="d-block text-center">
        <a style="font-size: 20px;">Pembayaran Anda Telah Kami Terima</a><br>
        <a style="font-size: 14px;">Tim Kami Akan Mengecek Pesananmu</a>
      </div>
        <b-button class="mt-3 justify-content-center align-items-center container" variant="outline-primary" @click="hideModal"><b-icon icon="check-circle"></b-icon> Done</b-button>
      </b-modal>
    </div>
  </div>
</template>

<script>
import client from '@/client'

export default {
  name: 'PaymentConfirmation',
  data () {
    return {
      nama: '',
      orderId: '',
      email: ''
    }
  },
  methods: {
    async confirmPayment () {
      const file = document.getElementById('fileBukti').files[0]
      const url = await client.view('allPembayaran').upload(file)
      const { nama, orderId, email } = this
      const dataPayment = { nama, orderId, email, fileBukti: url }

      await client.view('allPembayaran').insertRow(dataPayment)
        .then(() => {
          this.successMessage()
          this.onReset()
        })
    },
    onReset () {
      this.nama = null
      this.orderId = null
      this.email = null
    },
    successMessage () {
      this.$refs['my-modal'].show()
    },
    hideModal () {
      this.$refs['my-modal'].hide()
    },
    toUser () {
      this.$router.push('/user')
    }
  }
}
</script>

<style>

</style>
