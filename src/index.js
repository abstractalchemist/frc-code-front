import React from 'react';
import Rx from 'rx';
import ReactDOM from 'react-dom';
import Util from './utils';

class Main extends React.Component {
    constructor() {
	super();
    }

    render() {
	return (<div/>);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log("rendering content");
    ReactDOM.render(document.findElementById('content'), <Main />);
});
