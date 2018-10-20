import React from 'react'
import {logo} from '../images/logo.svg'


class Quote extends React.Component{


    constructor(props){
        super(props)
        
        
    }

    componentWillMount(){
    }

    render(){
        //alert(genzebPhoto);
        return(
            <div className="main-quote">
			    <blockquote><span>"</span><i>Successful</i> people are not ones who don't <i>fail</i>, <i>but</i> those who <i>don't give up</i>.<span>"</span></blockquote>
		    </div>
        )
    }
}

export default Quote;
                