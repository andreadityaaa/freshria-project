<template>
  <div class="justify-content-center align-items-center container" style="width: 50%;"><br>
      <div>
        <b-card>
        <form @submit.prevent="registerUser">
          <div class="form-group">
            <label>Nama</label>
            <input type="text" class="form-control" id="nama" autocomplete="off" v-model="nama">
          </div>
          <div class="form-group">
            <label>Alamat Lengkap</label>
            <input type="text" class="form-control" id="alamat" autocomplete="off" v-model="alamat">
          </div>
          <div class="form-group">
            <label>Masukkan Email</label>
            <input type="email" class="form-control" id="email" autocomplete="off" v-model="email">
          </div>
          <div class="form-group">
            <label>Nomor Handphone</label>
            <input type="tel" class="form-control" id="noHp" autocomplete="off" v-model="noHp">
          </div>
          <div class="form-group">
             <label>Password</label>
            <input type="password" class="form-control" id="password" autocomplete="off" v-model="password">
          </div>
          <button type="submit" class="btn btn-block text-white" style="background-color: #0271B8;" id="show-btn">Daftar</button>
          <br>
          <div class="text-center"><a href="/login">Masuk</a></div>
        </form>
        </b-card>
      </div>
    <div>
      <b-modal ref="my-modal" hide-footer>
      <div class="d-block text-center">
        <h3>Register Berhasil</h3>
      </div>
        <b-button class="mt-3 justify-content-center align-items-center container" variant="outline-primary" @click="hideModal"><b-icon icon="check-circle"></b-icon> Done</b-button>
      </b-modal>
    </div>
  </div>
</template>

<script>
import client from '@/client'

export default {
  name: 'Register',
  data () {
    return {
      nama: '',
      alamat: '',
      email: '',
      noHp: null,
      password: ''
    }
  },
  methods: {
    async registerUser () {
      const { nama, alamat, email, noHp, password } = this
      const role = 'MqkXnhbgINRzUTG'
      const dataUser = { nama, role, alamat, email, noHp, password }

      await client.view('allMember').insertRow(dataUser)
        .then(() => {
          this.onReset()
          this.successMessage()
        })
      console.log(dataUser)
    },
    onReset () {
      this.nama = ''
      this.alamat = ''
      this.email = ''
      this.noHp = null
      this.password = ''
    },
    successMessage () {
      this.$refs['my-modal'].show()
    },
    hideModal () {
      this.$refs['my-modal'].hide()
      this.$router.push('/login')
    }
  },
  created () {
    this.$store.dispatch('fetchKabupaten')
    console.log(this.kabupaten, '<<<<<<<')
  },
  computed: {
    kabupaten () {
      return this.$store.state.kabupaten
    }
  }
}
</script>
<style scoped>

</style>
