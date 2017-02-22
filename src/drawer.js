import React from 'react';

function Drawer({children}) {
    return (<div className="mdl-layout__drawer mdl-layout--small-screen-only">
            <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font">
	    {children}
	    </nav>
	    </div>)
}

export { Drawer as default };
