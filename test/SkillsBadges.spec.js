import { createLocalVue, mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import SkillsBadges from '~/components/SkillsBadges.vue'

Vue.use(Vuetify)

const testSkills = {
  skillName: 'Skill Icon Name'
}

describe('SkillsBadges', () => {
  let testInstance = null

  beforeAll(() => {
    const localVue = createLocalVue()
    testInstance = mount(SkillsBadges, {
      ...localVue,
      propsData: {
        input: testSkills
      }
    })
  })

  test('is a SkillsBadges instance', () => {
    expect(testInstance.isVueInstance()).toBeTruthy()
  })

  test.each(Object.keys(testSkills))('Has Skill text %s', (skillName) => {
    expect(testInstance.text()).toMatch(skillName)
  })

  test.each(Object.keys(testSkills))('Has Skill icon %s', (skillName) => {
    expect(testInstance.text()).toMatch(skillName)
  })
})
