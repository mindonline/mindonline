<template>
  <v-card>
    <v-card-text>
      {{ personal }}
    </v-card-text>
  </v-card>
</template>

<script>

import moment from 'moment'

export default {
  name: 'Personal',
  props: {
    birthday: {
      type: Date,
      required: true
    }
  },
  computed: {
    personal () {
      return this.$store.state.personal.replace('%years%', this.years)
    },
    years () {
      return moment().diff(moment(this.birthday), 'years')
    }
  }
}
</script>

<style scoped>

</style>
