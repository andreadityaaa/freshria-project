<template>
  <div class="justify-content-center align-items-center container mb-3"><br>
    <div>
      <button @click="toPayment" type="button" class="btn text-right text-white" style="background-color: #0271B8;">Konfirmasi Pembayaran</button>
      <div class="divider"/>
      <button @click="toOrder" type="button" class="btn text-right text-white" style="background-color: #0271B8;">Daftar Order</button>
    </div><br><br>
    <table class="table table-striped">
      <tbody>
        <tr>
          <td>Nama Lengkap</td>
          <td>:</td>
          <td>{{ user.nama }}</td>
        </tr>
        <tr>
          <td>Alamat</td>
          <td>:</td>
          <td>{{ user.alamat }}</td>
        </tr>
        <tr>
          <td>No. Handphone</td>
          <td>:</td>
          <td>0{{ user.noHp }}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>:</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>
    <b-container class="bv-example-row">
      <b-row class="justify-content-md-center">
        <b-col cols="12" md="auto">
          <button type="submit" @click="onLogout" class="btn text-white" style="background-color: #0271B8;">Logout</button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import client from '@/client'

export default {
  name: 'User',
  data () {
    return {
      user: {}
    }
  },
  async created () {
    const currentUser = await client.currentUser()
    this.user = currentUser.data
  },
  methods: {
    onLogout () {
      localStorage.clear()
      this.$router.push('/')
    },
    toPayment () {
      this.$router.push('/payment-confirmation')
    },
    toOrder () {
      this.$router.push('/detail-order')
    }
  },
  beforeRouteEnter (to, from, next) {
    if (window.localStorage.token) {
      next()
    } else {
      next({ name: 'Login' })
    }
  }
}
</script>

<style>
.divider {
    width:5px;
    height:auto;
    display:inline-block;
}
</style>
