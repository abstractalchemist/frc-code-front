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

function DailyRepoMenu({selectedRepo,repos,createNew,selectRepo}) {
    return (<div style={{height:"10em"}}>
	    <button id="repos" className="mdl-button mdl-js-button mdl-button--icon">
	    <i className="material-icons">more_vert</i>
	    </button>
	    <ul htmlFor="repos" className="mdl-menu mdl-js-menu mdl-menu--bottom-left">
	    {( _ => repos.map(({id,name}) => <li key={id} className="mdl-menu__item" onClick={selectRepo(name)}>{name}</li> ))()}
	    <li key="new_repo" className="mdl-menu__item" onClick={createNew}>Create New....</li>
	    </ul>
	    {selectedRepo}
	    </div>)
}

function DailyRepoList({lists, ...other}) {
    return (<div className="mdl-cell mdl-cell--4-col repo-view mdl-shadow--4dp">
	    <DailyRepoMenu {...other}/>
	    </div>)
    
}

function DailyRepoView() {
    return (<div className="mdl-cell mdl-cell--8-col repo-view mdl-shadow--4dp"/>)
}

class Daily extends React.Component {
    constructor() {
	super();
	this.state = {repos:[]};
    }

    componentDidMount() {
	GitRepoStore.repos().toArray().subscribe(repos => this.setState({repos}));
    }

    createNew(evt) {
	alert("Creating new");
	evt.preventDefault();
    }

    selectRepo(repo) {
	return (evt) => {
	    this.setState({selectedRepo:repo});
	    evt.preventDefault();
	}
			
    }
    
    render() {
	return (<div className="mdl-grid portfolio-max-width">
		<DailyTitle />
		<DailyRepoList createNew={this.createNew.bind(this)} selectRepo={this.selectRepo.bind(this)} {...this.state} />
		<DailyRepoView />
		</div>)
    }
}

export default Daily;
