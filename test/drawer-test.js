import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import Drawer from '../src/drawer';

describe('drawer test suite', function() {
    it('drawer basic test', function() {
	const d = mount(<Drawer />);
	expect(d).to.not.be.null;
    })
})
