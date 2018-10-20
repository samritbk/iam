import React from 'react'
import {Link} from 'react-router-dom'

class BiggerHeader extends React.Component{


    render(){
        
        return(
            <div className="myTop">
                <h1 className="helloStyle">Hello, I'm <span>Beraki Befekadu</span></h1>
                <h3 className="intoProfession">Android & Web Developer</h3>
                <Link to="/about" className="about-button">About</Link>
            </div>
        )
    }

}

export default BiggerHeader;