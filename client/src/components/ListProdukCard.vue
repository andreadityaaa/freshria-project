<template>
  <div class="mb-3" style="max-width: 18rem;">
    <b-card class="text-center" :title="produk.namaBarang" :img-src="produk.gambarBarang" img-alt="Image" img-top>
      <b-card-text>
        Rp {{ thousandFormat(produk.hargaBarang) }}
      </b-card-text>
      <template>
        <b-button class="btn text-white" style="background-color: #C4C4C4;" @click="toDetailProduk(produk.id)">Detail</b-button>
        <div class="divider" />
        <b-button class="btn text-white" style="background-color: #0271B8;" @click="toDetailProduk(produk.id)">Beli</b-button>
      </template>
    </b-card>
  </div>
</template>

<script>
export default {
  name: 'ListProdukCard',
  props: ['produk'],
  methods: {
    thousandFormat (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    toDetailProduk (id) {
      this.$router.push({ name: 'DetailProduk', params: { id } })
    }
  }
}
</script>

<style>

</style>
