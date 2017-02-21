import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Header from '../src/header';

describe('header test suite', function() {
    it('header test', function() {
	expect(shallow(<Header />)).to.not.be.null;
    });

    it('links test', function() {

	const h = shallow(<Header>
			  <a className="mdl-navigation__link" href="/link1">Link1</a>
			  <a className="mdl-navigation__link" href="/link2">Link2</a>
			  </Header>);

	expect(h.find('.mdl-navigation__link')).to.have.lengthOf(2);
	expect(h.find('.mdl-navigation__link').at(0).prop('href')).to.equal('/link1');
    });
})
