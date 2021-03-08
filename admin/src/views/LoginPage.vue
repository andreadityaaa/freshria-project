<template>
  <div class="q-pa-md row items-start q-gutter-md fixed-center">
    <q-card class="my-card">
      <q-card-section class="text-white" style="background-color: #71AC4A;">
        <div class="text-h6">Login</div>
      </q-card-section>
      <q-separator />
      <q-card-section>
        <div class="q-pa-md" style="max-width: 500px">
          <q-form
            @submit="onLogin"
            class="q-gutter-md"
          >
            <q-input
              filled
              v-model="email"
              label="Email"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Isikan email']"
            />
            <q-input
              filled
              type="password"
              v-model="password"
              label="Password"
            />
            <div>
              <q-btn label="Login" type="submit" style="background-color: #71AC4A;" class="text-white" />
            </div>
          </q-form>
        </div>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import client from '@/client'

export default {
  name: 'LoginPage',
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
      this.$router.push('/dashboard')
    }
  }
}
</script>

<style>

</style>
