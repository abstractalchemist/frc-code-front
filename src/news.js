import React from 'react';
import Rx from 'rx';
import NewsStore from './stores/newsstore';

function NewsCard({title,img,href,children}) {
    return (<div className="mdl-cell mdl-card mdl-shadow--4dp portfolio-card">
            <div className="mdl-card__media">
            <img className="article-image" src={img} style={{border:"0"}} alt=""></img>
            </div>
            <div className="mdl-card__title">
            <h2 className="mdl-card__title-text">{title}</h2>
            </div>
            <div className="mdl-card__supporting-text">
            {children}
            </div>
            <div className="mdl-card__actions mdl-card--border">
            <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect mdl-button--accent" href={href}>Read more</a>
            </div>
            </div>)
	    
}

function NewsTitle({title,text}) {
    return (<div className="mdl-cell mdl-card mdl-cell--12-col mdl-shadow--4dp">
	    <div className="mdl-card__title">
	    <span className="mdl-card__title-text">{title}</span>
	    </div>
	    <div className="mdl-card__supporting-text">
	    {text}
	    </div>
	    </div>);
}

class News extends React.Component {
    constructor() {
	super();
	this.state = { currentNews: [] }
	
    }

    componentDidMount() {
	NewsStore.currentNews().toArray().subscribe(news => {
//	    if(this.isMounted) {
		this.setState({currentNews: news});
//	    }
	});
    }

    componentWillUnmount() {
    }
    
    render() {
	return (<div>

		<div className="mdl-grid portfolio-max-width">
		<NewsTitle title="News For Programmers" text="Read Here Before going Anywhere else on the page!!!!!!!!!!"/>
		{( _ => {
		    return this.state.currentNews.map(obj => { return (<NewsCard {...obj} >
								       {obj.content}
								      </NewsCard>)  });
		})()}
		</div>
		</div>)
    }
}

export { NewsCard, NewsTitle,  News as default};
