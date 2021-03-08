<template>
  <div class="justify-content-center align-items-center container" style="width: 50%;"><br>
    <section id="addPage" class="row align-items-center"><br>
      <div class="card">
        <div class="card-body">
        <form @submit.prevent="onLogin">
          <div class="form-group">
            <label for="name">Masukkan Email</label>
            <input type="email" class="form-control" v-model="email">
          </div>
          <div class="form-group">
             <label for="imageUrl">Password</label>
            <input type="password" class="form-control" v-model="password">
          </div>
          <div class="help-block text-right"><a href="">Forget the password ?</a></div>
          <button type="submit" class="btn btn-block text-white" style="background-color: #0271B8;">Masuk</button>
          <br>
          <div class="text-center"><a href="/register">Daftar</a></div>
        </form>
        </div>
      </div>
    </section>
    <div>
      <b-modal ref="my-modal" hide-footer>
      <div class="d-block text-center">
        <h3>Login Berhasil</h3>
      </div>
        <b-button class="mt-3 justify-content-center align-items-center container" variant="outline-primary" @click="hideModal"><b-icon icon="check-circle"></b-icon> Done</b-button>
      </b-modal>
    </div>
  </div>
</template>

<script>
import client from '@/client'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async onLogin () {
      const token = await client.authenticate(
        this.email,
        this.password
      )
      window.localStorage.setItem('token', token)
      this.successMessage()
    },
    successMessage () {
      this.$refs['my-modal'].show()
    },
    hideModal () {
      this.$refs['my-modal'].hide()
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
