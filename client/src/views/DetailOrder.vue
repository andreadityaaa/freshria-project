<template>
  <b-container align-content="center"><br>
    <div class="d-flex justify-content-center align-items-center">
      <section class="row">
        <div class="d-flex align-items-center justify-content-between">
          <a style="font-size: 20px;">Order #121212</a>
          <button @click="toUser" type="button" class="btn text-right text-white" style="background-color: #0271B8;">Kembali</button>
        </div><br><br>
        <table class="table text-center">
          <thead>
            <tr>
              <th scope="col">Produk</th>
              <th scope="col">Jumlah (kg)</th>
              <th scope="col">Harga</th>
              <th scope="col">Total</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="keranjang in keranjang" :key="keranjang.id">
              <td>
                <div>
                  <img class="pull-left" :src="keranjang.gambarBarang" alt="poster" style="width: 50px">
                </div>
                <div>
                  <a style="font-size: 12px;">{{ keranjang.namaProduk }}</a>
                </div>
              </td>
              <td>{{ keranjang.kuantiti }}</td>
              <td>Rp {{ thousandFormat(keranjang.hargaBarang) }}</td>
              <td>Rp {{ totalHarga(keranjang.hargaBarang, keranjang.kuantiti) }}</td>
              <td>{{ keranjang.statusTransaksi }}</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  </b-container>
</template>

<script>
import client from '@/client'

export default {
  name: 'DetailOrder',
  data () {
    return {
      keranjang: [],
      cart: {},
      user: {},
      kode: this.kodeUnik(),
      statusTransaksi: 'Checkout'
    }
  },
  async created () {
    const currentUser = await client.currentUser()
    const userId = currentUser.data.id
    const { data } = await client
      .view('allKeranjang')
      .readRows({ userId })
      .toPromise()
    this.keranjang = data.nodes
    for (const cartItem of data.nodes) {
      const { data: products } = await client
        .view('allProduk')
        .readRow(cartItem.produkId.id)
        .toPromise()
      this.cart = products
    }
    this.user = currentUser.data
  },
  methods: {
    thousandFormat (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    totalHarga (num1, num2) {
      const output = num1 * num2
      return this.thousandFormat(output)
    },
    totalAll () {
      const data = this.keranjang
      const total = []
      data.forEach(x => total.push(x.hargaBarang * x.kuantiti))
      const output = total.reduce((a, b) => a + b, 0)
      return this.thousandFormat(output)
    },
    biayaTotal () {
      const data = this.keranjang
      const total = []
      data.forEach(x => total.push(x.hargaBarang * x.kuantiti))
      const output = total.reduce((a, b) => a + b, 0) + this.kode
      return this.thousandFormat(output)
    },
    kodeUnik () {
      const output = (Math.floor(Math.random() * 999) + 100)
      return output
    },
    toUser () {
      this.$router.push('/user')
    }
  }
}
</script>

<style>

</style>
