import { expect } from 'chai';
import { shallow } from 'enzyme';
import React from 'react';
import Main from '../src/main';

describe('basic suite', function() {
    it('basic test', function() {
	expect(true).to.be.true;
    })

    it('main test', function() {
	expect(<Main />).to.not.be.null;
    });
})
      
