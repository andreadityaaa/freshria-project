<template>
  <div class="justify-content-center align-items-center container" style="width: 50%;"><br>
    <b-card no-body class="overflow-hidden" style="max-width: 1000px;">
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img :src="produk.gambarBarang" alt="Image" class="rounded-0"></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body :title="produk.namaBarang">
            <h5>
              Rp {{ thousandFormat(produk.hargaBarang) }}/kg
            </h5>
            <b-card-text>
              <a style="font-weight: bold">Deskripsi:</a> {{ produk.deskripsiBarang }}
            </b-card-text>
            <b>Jumlah (kg)</b><br><br>
            <div class="col-7">
              <b-button-group size="sm">
                <b-button variant="outline-dark" @click="kurang">-</b-button>
                <input type="text" class="form-control text-center" v-model="kuantiti">
                <b-button variant="outline-dark" @click="tambah">+</b-button>
              </b-button-group>
            </div><br>
            <b-card-text>
              <b>Total</b><br>
              <b>Rp {{ thousandFormat(totalHarga()) }}</b>
            </b-card-text>
            <div>
            <b-button @click.prevent="toDrive()" class="btn btn-block text-white" style="background-color: #0271B8;">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
              </svg>
              BELI SEKARANG
            </b-button>
            <b-button @click.prevent="addCart(produk.id)" class="btn btn-block text-white" style="background-color: #C4C4C4;">TAMBAH KE KERANJANG</b-button>
            </div>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </div>
</template>

<script>
import client from '@/client'

export default {
  name: 'DetailProduk',
  data () {
    return {
      produk: {},
      kuantiti: 1,
      user: {}
    }
  },
  async created () {
    const currentUser = await client.currentUser()
    const { id } = this.$route.params
    const { data } = await client
      .view('allProduk')
      .readRow(id)
      .toPromise()
    this.produk = data
    this.user = currentUser
  },
  methods: {
    thousandFormat (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    tambah () {
      this.kuantiti++
    },
    kurang () {
      this.kuantiti--
    },
    totalHarga () {
      return this.kuantiti * this.produk.hargaBarang
    },
    toDrive () {
      window.open('http://wa.me/6282266920780', '_blank')
    },
    async addCart (produkId) {
      const { kuantiti } = this
      const userId = this.user.data.id
      const statusTransaksi = 'Keranjang'
      const dataProduk = { kuantiti, produkId, userId, statusTransaksi }

      await client.view('allKeranjang').insertRow(dataProduk)
        .then(() => {
          this.$router.push({ name: 'Cart' })
        })
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
