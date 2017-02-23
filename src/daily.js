import React from 'react';
import Rx from 'rx';
import GitRepoStore from './stores/gitrepo';

function DailyTitle({title}) {
    return (<div className="mdl-card mdl-cell mdl-cell--12-col mdl-shadow--4dp">
	    <div className="mdl-card__title">
	    {title}
	    </div>
	    </div>)
}

function DailyRepoMenu({repos}) {
    return (<div style={{height:"10em"}}>
	    <button id="repos" className="mdl-button mdl-js-button mdl-button--icon">
	    <i className="material-icons">more_vert</i>
	    </button>
	    <ul htmlFor="repos" className="mdl-menu mdl-js-menu mdl-menu--bottom-left">
	    {( _ => repos.map(({id,name}) => <li key={id} className="mdl-menu__item">{name}</li> ))()}
	    </ul>
	    
	    </div>)
}

function DailyRepoList({repos}) {
    return (<div className="mdl-cell mdl-cell--4-col">
	    <DailyRepoMenu repos={repos} />
	    </div>)
    
}

function DailyRepoView() {
    return (<div className="mdl-cell mdl-cell--8-col"/>)
}

class Daily extends React.Component {
    constructor() {
	super();
	this.state = {repos:[]};
    }

    componentDidMount() {
	GitRepoStore.repos().toArray().subscribe(repos => this.setState({repos}));
    }
    
    render() {
	return (<div className="mdl-grid portfolio-max-width">
		<DailyTitle />
		<DailyRepoList {...this.state} />
		<DailyRepoView />
		</div>)
    }
}

export default Daily;
