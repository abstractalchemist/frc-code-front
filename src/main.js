import React from 'react';

import Header from './header';
import Daily from './daily';
import News from './news';
import Tutorial from './tutorial';
import Drawer from './drawer';

function HeaderLink({id,text,active,updateView,href}) {
    const classes = ['mdl-navigation__link'];
    let ref = href || "#";
    if(active) {
	classes.push('is-active');
    }
    return (<a href={ref} id={id} className={classes.join(' ')} onClick={updateView}>{text}</a>);
}

class Main extends React.Component {
    constructor() {
	super();
	this.views = {news:<News />, tutorial: <Tutorial />, daily : <Daily />};
	this.state = {currentView: this.views.news, viewId:'news'};

    }

    componentDidUpdate() {
	componentHandler.upgradeDom();
    }
    
    updateView(evt) {

	switch(evt.currentTarget.id) {
	case "news": {
	    this.setState({currentView: this.views.news, viewId:'news'});
	}
	    break;
	case "tutorial": {
	    this.setState({currentView: this.views.tutorial,viewId:'tutorial'});
	}
	    break;

	case "daily": {
	    this.setState({currentView: this.views.daily,viewId:'daily'});
	}
	    break;
	default:
	    console.log("Unable to handle " + evt.currentTarget.id);
	}
	if(this.props.viewUpdated) {
	    this.props.viewUpdated(evt.currentTarget.id);
	}
	evt.preventDefault();
    }
    
    render() {
	const links = [	<HeaderLink key="news" id="news" active={this.state.viewId == 'news'} updateView={this.updateView.bind(this)} text="News" />,
			<HeaderLink key="tutorial" id="tutorial" active={this.state.viewId == 'tutorial'} updateView={this.updateView.bind(this)} text="Tutorial" />,
			<HeaderLink key="daily" id="daily" active={this.state.viewId == 'daily'} updateView={this.updateView.bind(this)} text="Daily" href="daily.html"/>]

	return (<div className="mdl-layout mdl-js-layout">
		<Header title="Maui High FRC">
		{links}
		</Header>
		<Drawer>
		{links}
		</Drawer>
		<main className="mdl-layout__content">
		
		{this.state.currentView}
		
		</main>
		
		</div>);
    }
}

export default Main;
