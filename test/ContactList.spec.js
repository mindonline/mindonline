import { createLocalVue, mount } from '@vue/test-utils'
import Vue from 'vue'
import Vuetify from 'vuetify'
import faker from 'faker'
import ContactList from '~/components/ContactList.vue'

Vue.use(Vuetify)

class ContactWrapper {
  constructor (props) {
    Object.assign(this, props)
  }

  toString () {
    return this.name
  }
}

const testContacts = Array(faker.random.number({
  min: 50,
  max: 100
}))
  .fill(null)
  .map(() => new ContactWrapper({
    name: faker.internet.userName(),
    icon: faker.random.words(),
    link: faker.internet.url()
  }))

describe('ContactList', () => {
  let testInstance = null

  beforeAll(() => {
    const localVue = createLocalVue()
    testInstance = mount(ContactList, {
      ...localVue,
      propsData: {
        value: testContacts
      }
    })
  })

  test('is a ContactList instance', () => {
    expect(testInstance.isVueInstance()).toBeTruthy()
  })

  test.each(testContacts)('has contact name "%s"', (contact) => {
    const text = testInstance.text()
    expect(text).toMatch(contact.name)
    expect(testInstance.text(contact.link)).toBeTruthy()
    const iconsClasses = contact.icon.trim().split(/\s+/).map(className => '.' + className)
    expect(
      testInstance.contains(iconsClasses.join()) || testInstance.html().includes(contact.icon)
    ).toBeTruthy()
  })
})
