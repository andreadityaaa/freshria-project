<template>
  <div>
    <div class="container">
      <b-navbar toggleable="lg" type="dark">
        <b-navbar-brand href="#">
          <img src="@/assets/freshria.png" alt="logo" style="width: 150px;">
        </b-navbar-brand>
        <b-navbar-brand class="justify-content-center align-items-center container">
          <!-- <b-button-group size="sm">
            <b-button style="background-color: #0271B8;"><b-icon icon="search"></b-icon></b-button>
            <input type="text" placeholder="Cari Produk....." class="form-control">
          </b-button-group> -->
        </b-navbar-brand>
        <b-navbar-brand>
          <b-navbar-nav class="ml-auto">
            <div class="h2 mb-0">
              <b-button to="/cart" pill style="background-color: #0271B8;"><b-icon icon="cart3"></b-icon></b-button>
                <div class="divider"/>
              <b-button pill style="background-color: #0271B8;" @click="toLogin"><b-icon icon="person"></b-icon></b-button>
            </div>
          </b-navbar-nav>
        </b-navbar-brand>
      </b-navbar>
    </div>
    <div>
      <b-navbar class="text-white" toggleable="lg" type="dark" style="background-color: #71AC4A;">
        <b-navbar-brand class="justify-content-center align-items-center container">
          <b-navbar-nav>
            <b-nav-item href="/">Beranda</b-nav-item>
          </b-navbar-nav>
        </b-navbar-brand>
        <b-navbar-brand class="justify-content-center align-items-center container">
          <b-navbar-nav>
            <b-nav-item href="/produk-list">Produk</b-nav-item>
          </b-navbar-nav>
        </b-navbar-brand>
        <b-navbar-brand class="justify-content-center align-items-center container">
          <b-navbar-nav>
            <b-nav-item-dropdown text="Kategori" right>
              <b-dropdown-item href="#">Sayur</b-dropdown-item>
              <b-dropdown-item href="#">Daging</b-dropdown-item>
              <b-dropdown-item href="#">Ikan</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-navbar-brand>
        <b-navbar-brand class="justify-content-center align-items-center container">
          <b-navbar-nav>
            <b-nav-item href="#">Tentang Kami</b-nav-item>
          </b-navbar-nav>
        </b-navbar-brand>
        <b-navbar-brand class="justify-content-center align-items-center container">
          <b-navbar-nav>
            <b-nav-item href="#">Cara Pembelian</b-nav-item>
          </b-navbar-nav>
        </b-navbar-brand>
        <b-navbar-brand class="justify-content-center align-items-center container">
          <b-navbar-nav>
            <b-nav-item href="#">Hubungi Kami</b-nav-item>
          </b-navbar-nav>
        </b-navbar-brand>
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    toLogin () {
      this.$router.push('/user')
    }
  }
}
</script>

<style>
.container {
  justify-items: center;
}
.divider {
    width:5px;
    height:auto;
    display:inline-block;
}
</style>
