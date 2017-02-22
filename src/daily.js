import React from 'react';

function DailyTitle({title}) {
    return (<div className="mdl-card mdl-cell mdl-cell--12-col mdl-shadow--4dp">
	    <div className="mdl-card__title">
	    {title}
	    </div>
	    </div>)
}

function DailyCodeUpload() {
    return (<div/>)
}

class Daily extends React.Component {
    render() {
	return (<div className="mdl-grid portfolio-max-width">
		<DailyTitle />
	       </div>)
    }
}

export default Daily;
