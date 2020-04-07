<template>
  <div class="text-center">
    <v-avatar v-if="image" size="250px" class="mb-4">
      <!--suppress HtmlUnknownTarget -->
      <img
        :src="image"
        :alt="imageTitle"
        :title="imageTitle"
        class="avatar zoomHover"
      >
    </v-avatar>

    <v-list v-if="title || subTitle">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title v-if="title" class="title">
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

<style lang="scss" scoped>
  .avatar {
    filter: drop-shadow(0px 0px 6px rgba(255, 255, 255, 0.5));
  }

  .zoomHover {
    transform: scale(0.9);

    &:hover {
      transform: scale(1.0);
    }

    transition: transform 1s ease-in-out;
  }
</style>
