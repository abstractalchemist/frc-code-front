import React from 'react';
import { expect } from 'chai';
import { mount } from 'enzyme';
import Main from '../src/main';
import Daily from '../src/daily';

describe('main suite', function() {
    it('main init test', function() {
	expect(mount(<Main />)).to.not.be.null;
    })

    it('view change test', function(done) {
	const testIt = function(testId) {
	    return function(id) {
		expect(id).to.equal(testId);
		done()
	    }
	}
	const mainElem = mount(<Main viewUpdated={testIt('daily')}/>);
	
	mainElem.find('header #daily').simulate('click', {});
	
    })
});

