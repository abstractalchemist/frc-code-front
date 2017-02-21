import React from 'react';
import Rx from 'rx';
import ReactDOM from 'react-dom';
import Main from './main';

document.addEventListener('DOMContentLoaded', function() {
    console.log("rendering content");
    ReactDOM.render(document.findElementById('content'), <Main />);
});
