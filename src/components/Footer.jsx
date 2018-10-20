import React from 'react'


class Footer extends React.Component{
    
    constructor(props){
        super(props)
        this.state={
         "year":null   
        }
    }

    componentWillMount(){
    
        this.setState({
            "year":new Date().getFullYear()
        });
                  
    }
    render(){
        //alert(genzebPhoto);
        return(
            <div className="footer">
                <div className="footer-tnx">Thank You for Visting</div>
                © <span id="year">{this.state.year}</span> All Rights Reserved.        Designed &amp; Developed by Beraki Befekadu
                
            </div>
        )
    }
}

export default Footer;
                