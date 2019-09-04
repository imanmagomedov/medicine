<template>
  <v-app>
    
    <v-navigation-drawer	:clipped="clipped"
                          v-model="drawer" 
                          enable-resize-watcher
                          app 
                          dark>
      <v-list>
        <v-list-tile  v-for="item in items"
                      :value="item.active"
                      :key="item.title"
                      :to="item.path" 
                      :exact="item.exact">
          <v-list-tile-action>
            <v-icon>{{ item.action }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title >{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>         
      </v-list>
    </v-navigation-drawer>      
    <v-toolbar fixed app :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>MEDICINE</span>
        <span class="font-weight-light">BEGOV</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-content>
    
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      clipped: true,
      items: [
        {
          action: 'home',
          title: 'Главная',
          path: '/',
        },
        {
          action: 'people',
          title: 'Пользователи',
          path: '/users',
        },       
      ]
    }
  },

  mounted () {
    this.$store.dispatch('loadProfile');
  }
}
</script>
