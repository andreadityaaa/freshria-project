<template>
  <div class="q-pa-md">
    <q-markup-table :separator="separator" flat bordered>
      <thead>
        <tr>
          <th class="text-center">Gambar Banner</th>
          <th class="text-center">Nama Banner</th>
          <th class="text-center">Nama Mitra</th>
          <th class="text-center">Kategori Produk</th>
          <th class="text-center">Hapus Data</th>
        </tr>
      </thead>
      <tbody>
        <TableBannerRow v-for="banner in banners.nodes" :key="banner.id" :banner="banner" />
      </tbody>
    </q-markup-table>
  </div>
</template>

<script>
import TableBannerRow from '@/components/TableBannerRow'
import client from '@/client'

export default {
  name: 'TableBanner',
  components: {
    TableBannerRow
  },
  data () {
    return {
      banners: {
        nodes: []
      },
      separator: 'cell'
    }
  },
  async created () {
    const { data } = await client
      .view('allBanner')
      .readRows()
      .toPromise()
    this.banners = data
  },
  beforeRouteEnter (to, from, next) {
    if (window.localStorage.token) {
      next()
    } else {
      next('/login')
    }
  }
}
</script>

<style>

</style>
