import React from 'react'
import {Link} from 'react-router-dom'

class Header extends React.Component{
    render(){   
        return(
            <div className="nav-holder">
            <div className="nav">
                <div className="writtingCon">
                    <div className="floats-2 top-menu logo">
                        <Link to="/">
                            <img src={require('../images/logo.png')} width="120px"
                            alt=""/>
                        </Link>
                    </div>
                    <div className="floats-2 top-menu menu">
                        <div className="menu">
                            <Link to="/about">
                                <i>(</i>About<i>)</i>
                            </Link>
                        </div>
                    </div>
                    <div className="clear"></div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Header;