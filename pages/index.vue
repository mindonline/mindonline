<template>
  <v-img :src="backgroundImage" height="100%">
    <v-container>
      <v-row>
        <v-col cols="12" md="6" offset-md="3">
          <profile-avatar
            :image="$store.state.ownerAvatarUrl"
            :image-title="$store.state.ownerAvatarTitle"
            :title="$store.state.ownerName"
            :sub-title="$store.state.ownerSubtitle"
          />
        </v-col>
      </v-row>
      <v-row wrap justify-center align-start>
        <v-col cols="12" md="6" offset-md="3">
          <div class="title mt-4 mb-4">
            About
          </div>
          <personal :birthday="$store.state.birthday"></personal>
        </v-col>
        <v-col cols="12" md="6" offset-md="3">
          <div class="title mt-4 mb-4">
            Contacts
          </div>
          <contact-list :value="$store.state.contacts"/>
        </v-col>
        <v-col cols="12" md="6" offset-md="3">
          <div class="title mt-4 mb-4">
            Primary Skills
          </div>
          <v-card>
            <v-card-text>
              <skills-badges :value="$store.state.primarySkills"/>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6" offset-md="3">
          <div class="title mt-4 mb-4">
            Efficiency stats
          </div>
          <div>
            <efficiency-chart :value="$store.state.workEfficiencyData"></efficiency-chart>
          </div>
        </v-col>
      </v-row>
      <v-row>
        <v-col>

        </v-col>
      </v-row>
    </v-container>
  </v-img>
</template>

<script>
import SkillsBadges from '../components/SkillsBadges'
import ContactList from '../components/ContactList'
import ProfileAvatar from '../components/ProfileAvatar'
import EfficiencyChart from '../components/EfficiencyChart'
import Personal from '@/components/Personal'

export default {
  components: {
    Personal,
    EfficiencyChart,
    ProfileAvatar,
    ContactList,
    SkillsBadges
  },

  computed: {
    backgroundImage () {
      switch (this.$vuetify.breakpoint.name) {
      case 'xs':
      case 'sm':
      case 'md':
        return '/assets/bg-index-mobile.jpg'
      default:
        return '/assets/bg-index.jpg'
      }

    }
  },

  head () {
    return {
      title: 'About me'
    }
  }
}
</script>
