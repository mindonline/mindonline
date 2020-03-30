<template>
  <v-list flat dense>
    <v-list-item v-for="contact in value" :key="contact.link" :href="contact.link" target="_blank">
      <v-list-item-icon>
        <v-avatar size="30px">
          <v-icon v-text="contact.icon"></v-icon>
        </v-avatar>
      </v-list-item-icon>
      <v-list-item-content class="align-self-end">
        <v-list-item-title class="subtitle-1">
          {{ contact.name }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
  export default {
    name: 'ContactList',
    props: {
      value: {
        type: Array,
        required: true
      }
    }
  }
</script>

<style scoped>

</style>
