import React from 'react';
import Rx from 'rx';
import ReactDOM from 'react-dom';
import Main from './main';
//import { page } from 'page.js/page.js';

document.addEventListener('DOMContentLoaded', function() {
    console.log("rendering content");
    ReactDOM.render( <Main />,document.getElementById('content'));

    //page('news.html', _ => {});
    //page('tutorial.html', _ => {});
    //page('robot-prog.html', _ => {});
});
