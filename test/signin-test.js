import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import GoogleSignin from '../src/signin';

describe('google signin suite', function() {
    it('signin test', function() {
	expect(mount(<GoogleSignin />)).to.not.be.null;
    })
});
