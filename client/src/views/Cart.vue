<template>
  <b-container align-content="center"><br>
  <div class="d-flex justify-content-center align-items-center">
    <section class="row">
      <div class="col-8">
        <h3>Keranjang</h3>
        <table class="table text-center">
          <thead>
            <tr>
              <th scope="col">Produk</th>
              <th scope="col">Jumlah (kg)</th>
              <th scope="col">Harga</th>
              <th scope="col">Total</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="keranjang in keranjang" :key="keranjang.id">
              <td>
                <div class="media">
                  <img class="pull-left" :src="keranjang.gambarBarang" alt="poster" style="width: 100px">
                </div>
                <div class="media-body">
                  <a>{{ keranjang.namaProduk }}</a>
                </div>
              </td>
              <td>{{ keranjang.kuantiti }}</td>
              <td>Rp {{ thousandFormat(keranjang.hargaBarang) }}</td>
              <td>Rp {{ totalHarga(keranjang.hargaBarang, keranjang.kuantiti) }}</td>
              <td>
                <div>
                  <button @click.prevent="deleteProduk(keranjang.id)" class="btn btn-success btn-sm">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-trash" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                      <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td class="text-right">
                <a style="font-size: 14px;">Sub Total :</a>
              </td>
              <td class="text-left">
                <a style="font-size: 14px;">Rp {{ totalAll() }}</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td class="text-right">
                <a style="font-size: 14px;">Ongkos Kirim :</a>
              </td>
              <td class="text-left">
                <a style="font-size: 14px;"><strong>GRATIS</strong></a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td class="text-right">
                <a style="font-size: 14px;">Kode Unik :</a>
              </td>
              <td class="text-left">
                <a style="font-size: 14px;">Rp {{ this.kode }}</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td class="text-right">
                <a style="font-size: 14px;">Total :</a>
              </td>
              <td class="text-left">
                <a style="font-size: 14px;">Rp {{ biayaTotal() }}</a>
              </td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td class="text-right">
                <a style="font-size: 10px;">*Transfer hingga digit terakhir agar transaksi anda terdeteksi</a>
              </td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td class="text-right">
                <button @click.prevent="checkout()" type="submit" class="btn text-right text-white" style="background-color: #0271B8;">Checkout</button>
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-4">
        <div class="card text-white" style="width: 20rem; background-color: #71AC4A;">
          <div class="card-body">
            <h5 class="card-title">Info Pembayaran</h5>
            <div>
              <table class="table text-white">
                <tbody>
                  <tr>
                    <td>
                      <a style="font-size: 12px;">Nama</a><br>
                      <a style="font-size: 12px;">{{ user.nama }}</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a style="font-size: 12px;">No. Handphone</a><br>
                      <a style="font-size: 12px;">0{{ user.noHp }}</a>
                    </td>
                  <tr>
                    <td>
                      <a style="font-size: 12px;">Alamat Lengkap</a><br>
                      <a style="font-size: 12px;">{{ user.alamat }}</a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="form-group">
                        <a style="font-size: 12px;">Metode Pembayaran</a><br>
                        <img src="../assets/bni.png" width="59" height="30" class="d-inline-block align-top" alt=""><br>
                        <strong>Ignasius Paulo Datoalin 0707425830</strong>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
  </b-container>
</template>

<script>
import client from '@/client'

export default {
  name: 'Cart',
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
    async deleteProduk (id) {
      await client.view('myKeranjang').deleteRow(id)
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
    async checkout () {
      const statusTransaksi = 'Menunggu Pembayaran'
      const orderId = 121212
      const currentUser = await client.currentUser()
      const userId = currentUser.data.id
      let id = ''
      const { data } = await client
        .view('allKeranjang')
        .readRows({ userId })
        .toPromise()
      for (let i = 0; i < data.nodes.length; i++) {
        id += data.nodes[i].id
      }
      console.log(id)
      const dataCheckout = { statusTransaksi, orderId }
      await client.view('allKeranjang').updateRow(id, {
        ...dataCheckout
      })
        .then(() => {
          this.$router.push('/detail-order')
        })
      // console.log(data.nodes[0].id)
      // console.log(dataCheckout)
      // this.$router.push('/checkout')
    }
  }
}
</script>

<style>

</style>
