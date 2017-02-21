import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Daily from '../src/daily';

describe('daily suite', function() {
    it('daily basic test', function() {
	expect(shallow(<Daily />)).to.not.be.null;
    })
});
