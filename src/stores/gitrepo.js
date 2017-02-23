import Rx from 'rx';

export default (function() {
    return {
	repos() {
	    return Rx.Observable.fromArray([{id:0,name:"repo1",href:"#"},{id:1,name:"repo2",href:"#"}]);
	},
	repoInfo(repo) {
	    return Rx.Observable.from();
	}
    }
})()
