<template>
  <q-page padding>
    <div class="row q-mb-md col-gutter-md">
      <div class="col-md-12 col-xs-12 col-lg-12">
        <div class="row">
          <div class="col-auto">
            <div class="left blue">
            </div>
          </div>
          <div class="col">
            <q-banner inline-actions class="text-black warna">
                <div class="text-h6">Data User</div>
                <div>Data Pelanggan</div>
                </q-banner>
          </div>
        </div>
      </div>
    </div>
    <q-card>
          <q-table
        :data="data"
        :columns="columns"
        row-key="name"
        class="warna"
      >
<template v-slot:body="props">
          <q-tr :props="props">
            <q-td key="username" :props="props">
              {{ props.row.username }}
            </q-td>
            <q-td key="namalengkap" :props="props">
                {{ props.row.namalengkap }}
            </q-td>
            <q-td key="email" :props="props">
                {{ props.row.email }}
            </q-td>
          </q-tr>
        </template>
      </q-table>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      columns: [
        { name: 'username', align: 'left', label: 'username', field: 'username', sortable: true },
        { name: 'namalengkap', align: 'left', label: 'Nama Lengkap', field: 'namalengkap', sortable: true },
        { name: 'email', align: 'left', label: 'E-mail', field: 'email' }
      ],
      data: []
    }
  },
  created () {
    this.getData()
  },
  methods: {
    getData () {
      this.$axios.get('user/getalluser')
        .then(res => {
          if (res.data.sukses) {
            this.data = res.data.data
          } else {
            this.$showNotif(res.data.pesan, 'negative')
          }
        })
    }
  }
}
</script>
<style scoped>
.left{
  width: 5px;
  height: 100%;
  background-color: aqua;
}
.warna{
    background-color: #fdfdfd;
}
</style>
