<template>
  <b-container fluid align-content="center"><br>
  <div class="flex justify-content-center align-items-center container-fluid d-block text-center">
        <b-card-group deck>
          <ListProdukCard v-for="produk in produk" :key="produk.id" :produk="produk" />
        </b-card-group>
  </div>
  </b-container>
</template>

<script>
import client from '@/client'
import ListProdukCard from '@/components/ListProdukCard'

export default {
  name: 'ProdukList',
  data () {
    return {
      produk: []
    }
  },
  components: {
    ListProdukCard
  },
  async created () {
    this.$store.dispatch('fetchBanner')
    const { data } = await client
      .view('allProduk')
      .readRows()
      .toPromise()
    this.produk = data.nodes
    console.log(this.produk)
  }
}
</script>

<style>
div {
  justify-content: center;
}
</style>
