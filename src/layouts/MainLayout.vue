<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-blue-grey-14">
      <q-toolbar>
        <q-btn danse flat round @click="leftDrawerOpen = !leftDrawerOpen"  icon="menu"/>
        <q-space></q-space>
        <q-btn flat round >
        <q-avatar>
          <img src="https://cdn.quasar.dev/img/avatar.png">
        </q-avatar>
        <q-menu>
          <q-list style="min-width: 100px">
            <q-separator />
            <q-item clickable v-close-popup>
              <q-item-section>Settings</q-item-section>
            </q-item>
            <q-separator />
            <q-item clickable v-close-popup @click="logout()">
              <q-item-section>logout</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoin="500"
      show-if-above
      content-class="text-white bg-primary"
    >
      <q-scroll-area class="fit">
        <q-list>
          <q-item class="justify-center text-center q-mt-md">
            <div>
            <q-avatar size="100px">
            <img src="https://cdn.quasar.dev/img/avatar.png">
              </q-avatar>
              <div class="text-weight-bold q-mt-md">{{ $q.localStorage.getItem('dataUser').namalengkap }}</div>
              <div>Aplikasi Penjualan Film</div>
            </div>
          </q-item>
          <q-item clickable active-class="active" v-ripple exact :to="{name: 'dashboardAdmin'}">
            <q-item-section class="ab" avatar>
              <q-icon name="dashboard"/>
            </q-item-section>
            <q-item-section>
              <q-item-label> Dashboard</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable active-class="active" v-ripple exact :to="{name: 'dataDVD'}">
            <q-item-section class="ab" avatar>
              <q-icon name="dashboard"/>
            </q-item-section>
            <q-item-section>
              <q-item-label> Data DVD</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable active-class="active" v-ripple exact :to="{name: 'InputBarang'}" >
            <q-item-section class="ab" avatar>
               <q-icon name="input"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Input DVD</q-item-label>
            </q-item-section>
          </q-item>
          <q-item clickable
            active-class="active"
            v-ripple
            exact :to="{name: 'user'}">
            <q-item-section class="ab" avatar>
              <q-icon name="person"/>
            </q-item-section>
            <q-item-section>
              <q-item-label>Data User</q-item-label>
            </q-item-section>
          </q-item>

    </q-list>
      </q-scroll-area>
    </q-drawer>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false
    }
  },
  methods: {
    logout () {
      this.$q.localStorage.remove()
      this.$router.push({ name: 'LoginPage' })
    }
  }
}

</script>
<style scoped>
.active{
  color: #000000;
  background-color: #fff;
  padding-right: 10px;
}
.ab{
  margin-top: 5px;
  margin-right: 5px;
}
</style>
