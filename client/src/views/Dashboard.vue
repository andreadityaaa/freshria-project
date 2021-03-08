<template>
  <div><br>
    <b-carousel
      id="carousel-1"
      ref="myCarousel"
      :interval="4000"
      controls
      indicators
      background="#ababab"
      img-width=720
      img-height=480
      style="text-shadow: 1px 1px 2px #333;"
    >
      <CarouselBanner v-for="banner in banner" :key="banner.id" :banner="banner" />
    </b-carousel>
    <br>
    <div class="container">
      <div class="d-block text-center">
        <h3>Produk Terbaru Kami</h3><br>
      </div>
      <div>
        <b-card-group deck>
          <ProdukCard v-for="produk in produk" :key="produk.id" :produk="produk" />
        </b-card-group>
      </div>
    </div>
    <br>
    <div class="container">
      <div class="d-block text-center">
        <h3>Cara Pembelian</h3><br>
        <b-container class="bv-example-row">
          <b-row>
            <b-col>
              <img src="../assets/pilih.jpg" alt="image" class="w-50"><br><br>
              <h5>Pilih Produk</h5>
            </b-col>
            <b-col>
              <img src="../assets/checkout.jpg" alt="image" class="w-50"><br><br>
              <h5>Checkout</h5>
            </b-col>
            <b-col>
              <img src="../assets/pengiriman.jpg" alt="image" class="w-50"><br><br>
              <h5>Pengiriman</h5>
            </b-col>
          </b-row>
        </b-container>
      </div>
    </div>
  </div>
</template>

<script>
import client from '@/client'
import ProdukCard from '@/components/ProdukCard'
import CarouselBanner from '@/components/CarouselBanner'

export default {
  name: 'Dashboard',
  data () {
    return {
      produk: []
    }
  },
  components: {
    ProdukCard,
    CarouselBanner
  },
  methods: {
    prev () {
      this.$refs.myCarousel.prev()
    },
    next () {
      this.$refs.myCarousel.next()
    }
  },
  computed: {
    banner () {
      return this.$store.state.banner
    }
  },
  async created () {
    this.$store.dispatch('fetchBanner')
    const { data } = await client
      .view('allProduk')
      .readRows({ limit: 4 })
      .toPromise()
    this.produk = data.nodes
  }
}
</script>
