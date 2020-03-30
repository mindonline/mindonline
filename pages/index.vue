<template>
  <v-layout wrap justify-center align-start>
    <v-flex xs12 md5 class="text-center">
      <profile-avatar
        :image="$store.state.ownerAvatarUrl"
        :image-title="$store.state.ownerAvatarTitle"
        :title="$store.state.ownerName"
        :sub-title="$store.state.ownerSubtitle"
      />
    </v-flex>
    <v-flex xs12 md5>
      <div class="title mt-4 mb-4">
        Contacts
      </div>
      <contact-list :value="$store.state.contacts" />
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
  import ContactList from '../components/ContactList'
  import ProfileAvatar from '../components/ProfileAvatar'

  export default {
    components: {
      ProfileAvatar,
      ContactList,
      SkillsBadges
    }
  }
</script>
