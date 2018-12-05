import React from 'react'


class Contact extends React.Component{
    render(){
        //alert(genzebPhoto);
        return(
            <div className="quote">
                <div className="contact">
                    <div className="floats-3">
                        <div className="whiteboxes">
                    <div className="infoText">ADDRESS</div>
                    <div className="liner"></div>
                        <a href=" "><div className="infoText">Winnipeg, Manitoba</div></a>
                            </div>
                        </div>
                    <div className="floats-3">
                        <div className="whiteboxes">
                    <div  className="infoText">LinkedIn</div>
                    <div className="liner"></div>
                        <a href="https://www.linkedin.com/in/berakib">
                            <div  className="infoText">Beraki Befekadu</div>
                        </a>
                        </div>
                    </div>
                    <div className="floats-3">
                        <div className="whiteboxes">
                    <div  className="infoText">Github</div>
                    <div className="liner"></div>
                        <a href="https://github.com/samritbk/">
                        <div  className="infoText">@samritbk</div>
                        </a>
                        </div>
                    </div>
                        <div className="clear"></div>
                </div>
                </div>
        )
    }
}

export default Contact;
                