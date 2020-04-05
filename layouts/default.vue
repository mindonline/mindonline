<template>
  <v-app dark>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      app
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
    </v-app-bar>

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <v-footer
      :fixed="fixed"
      class="justify-center"
      app
    >
      <span>Built with Nuxt (commit
        #<strong
          class="cursor--help"
          :title="gitVersionTime">{{gitVersion.branch}}-{{ gitVersion.hash }}</strong>)
        / CircleCi / Docker. ML &copy; {{ new Date().getFullYear() }}
      </span>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    computed: {
      gitVersionTime () {
        return this.gitVersion.time ? (new Date(this.gitVersion.time * 1000)).toString() : 'Unknown time'
      }
    },
    data () {
      return {
        gitVersion: process.env.GIT_VERSION,
        drawer: false,
        fixed: false,
        items: [
          {
            icon: 'mdi-apps',
            title: 'About me',
            to: '/'
          },
          {
            icon: 'mdi-chart-bubble',
            title: 'Inspire',
            to: '/inspire'
          }
        ],
        title: 'Mikhail Levi'
      }
    }
  }
</script>
<style>
  .cursor--help {
    cursor: help;
  }
</style>
