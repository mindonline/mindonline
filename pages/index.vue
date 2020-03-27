<template>
  <v-layout wrap justify-center align-start>
    <v-flex xs12 md5 class="text-center">
      <v-avatar size="250px" class="mb-4">
        <img
          src="photos/mikhail-levi-bkk-2020.jpg"
          alt="Mikhail Levi Bangkok 2020"
        >
      </v-avatar>

      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="title">
              Mikhail Levi
            </v-list-item-title>
            <v-list-item-subtitle>Full Stack Web Developer</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-flex>
    <v-flex xs12 md5>
      <div class="title mt-4 mb-4">
        Contacts
      </div>
      <v-list flat dense>
        <v-list-item href="https://t.me/mikhail_levi" target="_blank">
          <v-list-item-icon>
            <v-avatar size="30px">
              <v-icon>fab fa-telegram-plane</v-icon>
            </v-avatar>
          </v-list-item-icon>
          <v-list-item-content class="align-self-end">
            <v-list-item-title class="subtitle-1">
              @mikhail_levi
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="https://ru.linkedin.com/in/mikhail-levi-913b777a" target="_blank">
          <v-list-item-icon>
            <v-avatar size="30px">
              <v-icon>fab fa-linkedin</v-icon>
            </v-avatar>
          </v-list-item-icon>
          <v-list-item-content class="align-self-end">
            <v-list-item-title class="subtitle-1">
              Linkedin Profile
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="https://github.com/mindonline" target="_blank">
          <v-list-item-icon>
            <v-avatar size="30px">
              <v-icon>fab fa-github</v-icon>
            </v-avatar>
          </v-list-item-icon>
          <v-list-item-content class="align-self-end">
            <v-list-item-title class="subtitle-1">
              @mindonline
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-flex>
    <v-flex xs12 md5>
      <div class="title mt-4 mb-4">
        Primary Skills
      </div>
      <div>
        <skills-badges :input="$store.state.primarySkills" />
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
  import SkillsBadges from '../components/SkillsBadges'
  export default {
    components: { SkillsBadges }
  }
</script>
