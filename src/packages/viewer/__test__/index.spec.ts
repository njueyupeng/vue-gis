import { mount } from '@vue/test-utils'
import Viewer from '../index.vue'

describe('Viewer.vue', () => {
  test('render', () => {
    const wrapper = mount(Viewer, {
      props: {},
    })
    expect(wrapper.classes()).toContain('viewer')
  })
})
