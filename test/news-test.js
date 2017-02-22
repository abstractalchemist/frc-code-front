import React from 'react';
import { expect } from 'chai';
import { shallow,mount } from 'enzyme';
import News, { NewsCard, NewsTitle } from '../src/news';

describe("news test suite", function() {
    it('news basic test', function() {
	expect(shallow(<News/>)).to.not.be.null;
    })

    it('news card test', function() {
	const news = mount(<News />);
	expect(news.state('currentNews')).to.have.lengthOf(4);
    })

    it('news card ui', function() {
	const newsCard = mount(<NewsCard title="Test Page" href="/linkhere">SomeStuff</NewsCard>);
	expect(newsCard).to.not.be.null;
	expect(newsCard.find('.mdl-card__title').text()).to.equal("Test Page");
    })

    it('news title ui', function() {
	const title = mount(<NewsTitle title="News Title"/>);
	expect(title).to.not.be.null;
	expect(title.find('.mdl-card__title').text()).to.equal("News Title");
    })
});
