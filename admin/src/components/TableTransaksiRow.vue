<template>
  <tr>
    <td>
      <div class="col-4">
        <q-img
          :src="transaksi.gambarBarang"
          style="height: 105px; max-width: 106px"
        />
      </div>
    </td>
    <td>{{ transaksi.namaProduk }}</td>
    <td>
      <a style="font-size: 12px;">Nama : {{ users.nama }}</a><br>
      <a style="font-size: 12px;">Email : {{ users.email }}</a><br>
      <a style="font-size: 12px;">No. Hp : 0{{ users.noHp }}</a><br>
      <a style="font-size: 12px;">Alamat Lengkap : {{ users.alamat }}</a><br>
    </td>
    <td>{{ transaksi.kuantiti }} kg</td>
    <td>Rp {{ thousandFormat(transaksi.hargaBarang) }}</td>
    <td>Rp {{ totalHarga(transaksi.hargaBarang, transaksi.kuantiti) }}</td>
    <td>
      <q-select outlined v-model="statusTransaksi" :options="options" />
    </td>
    <td>
      <div class="q-pa-md q-gutter-sm row items-center">
        <q-btn round color="primary" icon="edit_mode" size="sm" @click="confirm = true" />
      </div>
    </td>
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="edit_mode_outline" color="primary" text-color="white" />
          <span class="q-ml-sm">Apakah anda yakin merubah status data ini?</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Tidak" color="primary" v-close-popup />
          <q-btn flat label="Ya" color="primary" v-close-popup @click="changeStatus(transaksi.id)" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </tr>
</template>

<script>
import client from '@/client'

export default {
  name: 'TableTransaksiRow',
  props: ['transaksi'],
  data () {
    return {
      users: {},
      statusTransaksi: this.transaksi.statusTransaksi,
      options: [
        'Keranjang', 'Menunggu Pembayaran', 'Konfirmasi Pembayaran', 'Pembayaran Diterima', 'Diproses', 'Dikirim', 'Sampai', 'Selesai'
      ],
      confirm: false
    }
  },
  async created () {
    const { data } = await client
      .view('allMember')
      .readRow(this.transaksi.userId.id)
      .toPromise()
    this.users = data
  },
  methods: {
    thousandFormat (x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    },
    totalHarga (num1, num2) {
      const output = num1 * num2
      return this.thousandFormat(output)
    },
    async changeStatus (id) {
      const statusTransaksi = this.statusTransaksi
      const dataStatus = { statusTransaksi }
      await client.view('allKeranjang').updateRow(id, {
        ...dataStatus
      })
      console.log(dataStatus)
    }
  }
}
</script>

<style>
</style>
