import { createLocalVue, mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import SkillsBages from '@/components/SkillsBages.vue'

Vue.use(Vuetify)

const testSkills = {
  skillName: 'Skill Icon Name'
}

describe('SkillsBages', () => {
  let testInstance = null

  beforeAll(() => {
    const localVue = createLocalVue()
    testInstance = mount(SkillsBages, {
      ...localVue,
      propsData: {
        input: testSkills
      }
    })
  })

  test('is a SkillsBages instance', () => {
    expect(testInstance.isVueInstance()).toBeTruthy()
  })

  test.each(Object.keys(testSkills))('Has Skill text %s', (skillName) => {
    expect(testInstance.text()).toMatch(skillName)
  })

  test.each(Object.keys(testSkills))('Has Skill icon %s', (skillName) => {
    expect(testInstance.text()).toMatch(skillName)
  })
})
