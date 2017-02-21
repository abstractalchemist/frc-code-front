import React from 'react';
import { expect } from 'chai';
import { shallow,mount } from 'enzyme';
import News from '../src/news';

describe("news test suite", function() {
    it('news basic test', function() {
	expect(shallow(<News/>)).to.not.be.null;
    })

    it('news card test', function() {
	const news = mount(<News />);
	expect(news.state('currentNews')).to.have.lengthOf(3);
    })
});
