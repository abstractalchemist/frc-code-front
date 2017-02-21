import React from 'react';
import GoogleSignin from './signin';

function Header({title,children}) {
    return (<header className="mdl-layout__header mdl-layout__header--waterfall portfolio-header">
	    <GoogleSignin />
            <div className="mdl-layout__header-row portfolio-logo-row">
            <span className="mdl-layout__title">
            <div className="portfolio-logo"></div>
            <span className="mdl-layout__title">{title}</span>
            </span>
            </div>
            <div className="mdl-layout__header-row portfolio-navigation-row mdl-layout--large-screen-only">
            <nav className="mdl-navigation mdl-typography--body-1-force-preferred-font" id='navbar'>

	    {children}
            
            </nav>
            </div>
            </header>)

}

export default Header;
