import React from 'react'
import { expect } from 'chai'
import { shallow } from 'enzyme'

import Footer from './Footer'

describe('<Footer />', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow( < Footer / > )
    });

    it('contains a title component with help', () => {
        expect(wrapper.find('h1').first().text())
            .to.equal('Help')
    });

    it('contains a section menu with the title', () => {
        expect(wrapper.find('section').first().text())
            .to.equal('Fullstack.io')
    });
})