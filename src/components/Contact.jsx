import React from 'react'


class Contact extends React.Component{
    render(){
        //alert(genzebPhoto);
        return(
            <div className="quote">
                <div className="contact">
                    <div className="floats-3">
                        <div className="whiteboxes">
                            <i className="ion-map"></i>
                    <div className="infoText">ADDRESS</div>
                    <div className="liner"></div>
                        <a href=" "><div className="infoText">Winnipeg, Manitoba</div></a>
                            </div>
                        </div>
                    <div className="floats-3">
                        <div className="whiteboxes">
                            <i className="ion-ios-telephone"></i>
                    <div  className="infoText">PHONE</div>
                    <div className="liner"></div>
                        <a href=" "><div  className="infoText">(204) 951 6777</div></a>
                            </div>
                        </div>
                    <div className="floats-3">
                        <div className="whiteboxes">
                            <i className="ion-at"></i>
                    <div  className="infoText">EMAIL</div>
                    <div className="liner"></div>
                        <a href=" "><div  className="infoText">contact@beraki.info</div></a>
                            </div>
                        </div>
                        <div className="clear"></div>
                </div>
                </div>
        )
    }
}

export default Contact;
                