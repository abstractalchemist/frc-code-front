import Rx from 'rx';

export default (function() {
    return  {
	GET(url, {headers}) {
	    return Rx.Observable.fromPromise(new Promise((resolve,reject) => {
		let xhr = new XMLHttpRequest();
		xhr.open('GET', url, true);
		if(headers) {
		    for(var i in headers) {
			if(headers.hasOwnProperty(i)) {
			    xhr.setRequestHeader(i, headers[i]);
			}
		    }
		}
		xhr.onreadystatechange =  () => {
		    if(xhr.readyState == 4) {
			if(xhr.status == 200) {
			    resove(xhr);
			}
			else {
			    reject(xhr);
			}
		    }
		}
		xhr.send();
	    }));
	},
	
	POST(url, data) {
	    return Rx.Observable.fromPromise(new Promise((resolve,reject) => {
	    }));
	}
    }
})()
