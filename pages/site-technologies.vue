<template>
  <v-container>
    <div class="title pb-3">
      General info
    </div>

    <v-alert color="indigo" type="info">
      This is PWA site (brings together profit of SPA and server side rendering technologies).
      <dl class="spec-list">
        <dt>Version date:</dt>
        <dd>{{ gitVersionTime }}</dd>
        <dt>Build hash:</dt>
        <dd>
          {{ gitVersion.hash }}
          <img
            src="//circleci.com/gh/mindonline/mindonline.svg?style=shield"
            alt="CI/CD"
            class="cicd-logo"
          >
        </dd>
        <dt>Source branch:</dt>
        <dd>{{ gitVersion.branch }}</dd>
      </dl>
      <v-btn color="primary" href="https://github.com/mindonline/mindonline" target="_blank">
        Source code
      </v-btn>
    </v-alert>

    <div class="title pb-3">
      This site has been made using the following technologies:
    </div>

    <div class="d-flex flex-wrap justify-space-around">
      <div
        v-for="logo in $store.state.siteTechnologies.logos"
        :key="logo"
      >
        <div class="text-center ma-2">
          <!--suppress HtmlUnknownTarget -->
          <img :src="logo" alt="" height="100">
        </div>
      </div>
    </div>
  </v-container>
</template>

<script>
  export default {
    name: 'SiteTechnologies',
    data () {
      return {
        gitVersion: process.env.GIT_VERSION
      }
    },
    computed: {
      gitVersionTime () {
        return this.gitVersion.time ? (new Date(this.gitVersion.time * 1000)).toString() : 'Unknown time'
      }
    },
    head () {
      return {
        title: 'How this works?'
      }
    }
  }
</script>

<style lang="scss" scoped>
  @import "~vuetify/src/styles/styles";

  .spec-list {
    margin: 10px 0;
    //noinspection SassScssUnresolvedVariable
    @media #{map-get($display-breakpoints, 'md-and-up')} {
      display: grid;
      grid-template-columns: auto auto;

      dd {
        padding: 0 0 0 10px;
      }
    }

    dd {
      padding: 0 0 10px 0;
    }

    dt, dd {
      display: block
    }

    dt {
      font-weight: bold;
    }
  }

  .cicd-logo {
    vertical-align: text-bottom;
  }
</style>
