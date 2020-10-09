<template>
  <div class="text-center">
    <v-chip
      v-for="skill in skills"
      :key="skill.name"
      class="ma-2"
      :color="color"
      :text-color="textColor"
    >
      <v-avatar left>
        <v-icon small v-text="skill.icon" />
      </v-avatar>
      {{ skill.name }}
    </v-chip>
  </div>
</template>

<script>
  export default {
    name: 'SkillsBadges',
    props: {
      value: {
        type: Object,
        required: true
      },
      color: {
        default: 'primary',
        type: String
      },
      textColor: {
        default: 'white',
        type: String
      }
    },
    computed: {
      skills () {
        return Object.keys(this.value)
          .map(name => ({
            name,
            icon: this.value[name]
          }))
      }
    }
  }
</script>

<style scoped>

</style>
