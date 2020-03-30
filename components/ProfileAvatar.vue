<template>
  <div>
    <v-avatar v-if="image" size="250px" class="mb-4">
      <img
        :src="image"
        :alt="imageTitle"
        :title="imageTitle"
      >
    </v-avatar>

    <v-list v-if="title || subTitle">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title v-if="title" class="title" >
            {{ title }}
          </v-list-item-title>
          <v-list-item-subtitle v-if="subTitle">
            {{ subTitle }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
  export default {
    name: 'ProfileAvatar',
    props: {
      image: {
        type: String,
        default: null
      },
      imageTitle: {
        type: String,
        default: null
      },
      title: {
        type: String,
        default: null
      },
      subTitle: {
        type: String,
        default: null
      }
    }
  }
</script>

<style scoped>

</style>
