import React from 'react';

function SigninButton({id}) {
    return (<div id={id} className="google-sigin-button"/>);
}

class GoogleSignin extends React.Component {
    constructor() {
	super();
    }

    componentDidMount() {
	if(gapi) {
	    gapi.load('auth2', this.start.bind(this));
	}
    }

    start() {
	if(gapi.auth2) {
	    this.auth2 = gapi.auth2.init({clientId:"",scope:"profile"});
	    this.auth2.attachClickHandler(this.signinId, {}, this.onSuccess.bind(this), this.onFailure.bind(this));
	}
	
    }

    onSuccess(googleUser) {
	console.log("signin success");
    }

    onFailure(error) {
	console.log("sigin fail");
    }

    render() {
	return (<div>
		<SigninButton id={this.signinId} />
		</div>)
    }
}
