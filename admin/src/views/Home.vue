<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated style="background-color: #71AC4A;">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        />

        <q-toolbar-title>
          Freshria
        </q-toolbar-title>

        <div><q-btn align="around" class="btn-fixed-width" color="white" text-color="black" label="Logout" icon="logout" @click="onLogout"/></div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple to="/dashboard">
              <q-item-section avatar>
                <q-icon name="dashboard" />
              </q-item-section>

              <q-item-section>
                Dashboard
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/register-mitra">
              <q-item-section avatar>
                <q-icon name="bookmarks" />
              </q-item-section>

              <q-item-section>
                Register Mitra
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/list-banner">
              <q-item-section avatar>
                <q-icon name="landscape" />
              </q-item-section>

              <q-item-section>
                List Banner
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/input-banner">
              <q-item-section avatar>
                <q-icon name="perm_media" />
              </q-item-section>

              <q-item-section>
                Input Banner
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/list-trace-ability">
              <q-item-section avatar>
                <q-icon name="date_range" />
              </q-item-section>

              <q-item-section>
                List Trace Ability
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/trace-ability">
              <q-item-section avatar>
                <q-icon name="event" />
              </q-item-section>

              <q-item-section>
                Trace Ability
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/list-produk">
              <q-item-section avatar>
                <q-icon name="list" />
              </q-item-section>

              <q-item-section>
                List Produk
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/input-produk">
              <q-item-section avatar>
                <q-icon name="description" />
              </q-item-section>

              <q-item-section>
                Input Data Penjualan Produk
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/list-transaksi">
              <q-item-section avatar>
                <q-icon name="shopping_cart" />
              </q-item-section>

              <q-item-section>
                List Transaksi
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/list-pembayaran">
              <q-item-section avatar>
                <q-icon name="payments" />
              </q-item-section>

              <q-item-section>
                List Pembayaran
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/data-lokasi">
              <q-item-section avatar>
                <q-icon name="format_list_numbered" />
              </q-item-section>

              <q-item-section>
                Table Data Lokasi
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/input-kabupaten">
              <q-item-section avatar>
                <q-icon name="location_on" />
              </q-item-section>

              <q-item-section>
                Input Kabupaten
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/input-kecamatan">
              <q-item-section avatar>
                <q-icon name="location_on" />
              </q-item-section>

              <q-item-section>
                Input Kecamatan
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple to="/input-kelurahan">
              <q-item-section avatar>
                <q-icon name="location_on" />
              </q-item-section>

              <q-item-section>
                Input Kelurahan
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <div class="text-weight-bold">Admin Freshria</div>
          </div>
        </q-img>
    </q-drawer>

    <q-page-container>
      <router-view></router-view>
    </q-page-container>
    <q-footer elevated style="background-color: #71AC4A;">
      <q-toolbar>
        <q-toolbar-title>
          <a style="font-size: 15px;">&copy; Freshria 2021 </a>
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: 'LayoutDefault',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    onLogout () {
      localStorage.clear()
      this.$router.push('/login')
    }
  }
}
</script>

<style>
</style>
