import React from 'react'
import Enzyme, {mount} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
Enzyme.configure({ adapter: new Adapter() })

import NoteForm from '../component/note-form'

describe('NoteForm', () => {
  test('initial state is correct', () => {
    let wrapper = mount(<NoteForm />)
    expect(wrapper.state('title')).toEqual('')
    expect(wrapper.state('content')).toEqual('')
  })
})
