import Rx from 'rx';
import Utils from '../utils'

export default (function() {
    return {
	currentNews() {
	    return Rx.Observable.fromArray([{title:"News 1"},{title:"News 2"},{title:"News 3"},{title:"News 4"}]);
	}
    }
})()
