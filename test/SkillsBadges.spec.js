import { createLocalVue, mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import faker from 'faker'
import SkillsBadges from '~/components/SkillsBadges.vue'

Vue.use(Vuetify)

const testSkills = Array(faker.random.number({
  min: 5,
  max: 10
}))
  .fill(null)
  .map(() => faker.random.word())
  .reduce((p, i) => Object.assign(p, { [i]: faker.random.words() }), {})

describe('SkillsBadges', () => {
  let testInstance = null

  beforeAll(() => {
    const localVue = createLocalVue()
    testInstance = mount(SkillsBadges, {
      ...localVue,
      propsData: {
        value: testSkills
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
