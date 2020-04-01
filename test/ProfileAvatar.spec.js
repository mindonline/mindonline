import { createLocalVue, mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import faker from 'faker'
import ProfileAvatar from '~/components/ProfileAvatar.vue'

Vue.use(Vuetify)

const testAvatar = {
  title: faker.name.findName(),
  subTitle: faker.name.jobTitle(),
  image: faker.image.avatar(),
  imageTitle: faker.lorem.sentence()
}

const textualProps = ['title', 'subTitle']

function makeInstance (props) {
  const localVue = createLocalVue()
  return mount(ProfileAvatar, {
    ...localVue,
    propsData: {
      ...props
    }
  })
}

describe('Basic usage with all pros', () => {
  const basicUsageInstance = makeInstance(testAvatar)

  test('is a ProfileAvatar instance', () => {
    expect(basicUsageInstance.isVueInstance()).toBeTruthy()
  })

  test.each(textualProps)('Has "%s"', (attrName) => {
    expect(basicUsageInstance.text()).toMatch(testAvatar[attrName])
  })

  test('Test image attributes', () => {
    const img = basicUsageInstance.find('div.v-avatar > img')
    expect(img.attributes('src')).toMatch(testAvatar.image)
    expect(img.attributes('alt')).toMatch(testAvatar.imageTitle)
    expect(img.attributes('title')).toMatch(testAvatar.imageTitle)
  })
})

describe('Usage with partials props', () => {
  // Visible text
  test.each(textualProps)('Has %s', (propName) => {
    const partialUsageInstance = makeInstance({
      [propName]: testAvatar[propName]
    })
    expect(partialUsageInstance.isVueInstance()).toBeTruthy()
    expect(partialUsageInstance.text()).toMatch(testAvatar[propName])
  })

  // Image Attributes test
  test('Only image attribute', () => {
    // Only image provided
    const partialUsageInstance = makeInstance({
      image: testAvatar.image
    })
    expect(partialUsageInstance.isVueInstance()).toBeTruthy()
    const img = partialUsageInstance.find('div.v-avatar > img')
    expect(img.attributes('src')).toBe(testAvatar.image)
    expect(img.attributes('alt')).not.toBeDefined()
    expect(img.attributes('title')).not.toBeDefined()
  })
})
