<template>
  <div style="background-color: #71AC4A;" class="text-white mt-5">
    <footer>
      <div class="container p-4">
        <div class="row">
          <div class="col">
            <img src="@/assets/freshria.png" alt="logo" style="width: 150px;">
            <br>
            <p>
              <a>Jl. Raya Banyumas Purwokerto</a><br>
              <a>Phone: 0881 2345 6789</a><br>
              <a>Email: freshria@gmail.com</a>
            </p>
          </div>
          <div class="col">
            <h5 class="text-uppercase">Daftar Nenu</h5>
            <ul class="list-unstyled mb-0">
              <li>
                <a href="#!" class="text-white">Produk</a>
              </li>
              <li>
                <a href="#!" class="text-white">Tentang Kami</a>
              </li>
              <li>
                <a href="#!" class="text-white">Cara Pembelian</a>
              </li>
            </ul>
          </div>
          <div class="col">
            <h5 class="text-uppercase mb-0">Kategori</h5>
            <ul class="list-unstyled">
              <li>
                <a href="#!" class="text-white">Sayur</a>
              </li>
              <li>
                <a href="#!" class="text-white">Telur</a>
              </li>
              <li>
                <a href="#!" class="text-white">Ikan</a>
              </li>
              <li>
                <a href="#!" class="text-white">Daging</a>
              </li>
            </ul>
          </div>
          <div class="col">
            <h5 class="text-uppercase mb-0">Masukkan Email Anda</h5><br>
            <form>
              <div class="form-group">
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
              </div>
              <button type="submit" class="btn btn-block text-white" style="background-color: #0271B8;">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style>
.mt-5 {
  margin-top: 0 !important;
}
</style>
