<template>
  <v-card
    class="mt-4 pt-4 mx-auto"
  >
    <v-sheet
      class="v-sheet--offset mx-auto"
      max-width="calc(100% - 32px)"
    >
      <template v-for="compitition in $store.state.workEfficiencyData">
        <div :key="compitition.name" class="mb-3">
          <div class="subtitle">
            {{ compitition.name }}
          </div>
          <v-progress-linear
            :color="compitition.color ? compitition.color : 'blue'"
            height="10"
            :value="compitition.value"
            striped
          />
        </div>
      </template>
    </v-sheet>

    <v-card-text class="pt-0">
      <div class="title font-weight-light mb-2 mt-2">
        Work efficiency
      </div>
      <div class="subheading font-weight-light grey--text">
        Average efficiency during the day
      </div>
      <v-divider class="my-2" />
      <v-icon
        class="mr-2"
        small
      >
        mdi-clock
      </v-icon>
      <span class="caption grey--text font-weight-light">According to the employee opinion</span>
    </v-card-text>
  </v-card>
</template>

<script>
  export default {
    name: 'EfficiencyChart'
  }
</script>

<style scoped>

</style>
