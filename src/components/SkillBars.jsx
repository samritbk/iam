import React from 'react'

class SkillBars extends React.Component{

	componentDidMount(){

	}

    render(){
        return(
		<div className="full-content-smoke">
			<div className="mid-title fade-in marginB30">
				My Skills
			</div>
			<div className="margined-wrapper">
			<div className="floats-5" align="center">
				<img src={require('../images/css3.svg')} width="50%" height="200px" align="center" />
			</div>
			<div className="floats-5" align="center">
				<img src={require('../images/js.svg')} width="50%" height="200px" />
			</div>
			<div className="floats-5" align="center">
				<img src={require('../images/nodejs.svg')} width="50%" height="200px" />
			</div>
			<div className="floats-5" align="center">
				<img src={require('../images/react.svg')} width="50%" height="200px" />
			</div>
			<div className="floats-5" align="center">
				<img src={require('../images/java.svg')} width="50%" height="200px" />
			</div>
            <div className="clear"></div>
            <div className="smokeWritting">
                * My skills help me develop Native Android and Web based application
            </div>
            </div>
		</div>
        )
    }
}

export default SkillBars;
    