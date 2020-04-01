<template>
  <v-row wrap justify-center align-start>
    <v-col cols="12" md="6">
      <profile-avatar
        :image="$store.state.ownerAvatarUrl"
        :image-title="$store.state.ownerAvatarTitle"
        :title="$store.state.ownerName"
        :sub-title="$store.state.ownerSubtitle"
      />
    </v-col>
    <v-col cols="12" md="6">
      <v-row>
        <v-col cols="12">
          <div class="title mt-4 mb-4">
            Contacts
          </div>
          <contact-list :value="$store.state.contacts" />
        </v-col>
        <v-col cols="12">
          <div class="title mt-4 mb-4">
            Primary Skills
          </div>
          <div>
            <skills-badges :value="$store.state.primarySkills" />
          </div>
        </v-col>
      </v-row>
    </v-col>
  </v-row>
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
