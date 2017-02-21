var jsdom = require('jsdom').jsdom;

global.document = jsdom('');
global.gapi = {
    load(id, cb) {
	this.auth2 = {
	    init(opts) {
		return {
		    attachClickHandler(_1, _2, success, fail) {
		    }
		}
	    }
	    
	};
	if(cb) 
	    cb();
    }
};
global.window = document.defaultView;
Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};
