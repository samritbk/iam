import React from 'react'
import {logo} from '../images/logo.svg'
import $ from 'jquery';

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
			<div className="floats-2">
				<div className="margined-wrapper">
					<div className="skillbar clearfix " data-percent="95%">
						<div className="skillbar-title html5Color"><span>HTML5</span></div>
						<div className="skillbar-bar html5BarColor"></div>
						<div className="skill-bar-percent">95%</div>
					</div>
				</div>
			</div>
			<div className="floats-2">
				<div className="margined-wrapper">
					<div className="skillbar clearfix" data-percent="95%">
					<div className="skillbar-title css3Color" ><span>CSS3</span></div>
					<div className="skillbar-bar css3BarColor" ></div>
					<div className="skill-bar-percent">95%</div>
				</div>
			</div>
		</div>
			<div className="floats-2">
				<div className="margined-wrapper">
					<div className="skillbar clearfix " data-percent="89%">
						<div className="skillbar-title phpColor" ><span>PHP</span></div>
						<div className="skillbar-bar phpBarColor" ></div>
						<div className="skill-bar-percent">89%</div>
					</div>
				</div>
			</div>
			<div className="floats-2">
				<div className="margined-wrapper">
					<div className="skillbar clearfix " data-percent="80%">
						<div className="skillbar-title jQueryColor" ><span>jQuery</span></div>
						<div className="skillbar-bar jQueryBarColor" ></div>
						<div className="skill-bar-percent">80%</div>
					</div>
				</div>
            </div>
            <div className="floats-2">
                <div className="margined-wrapper">
                    <div className="skillbar clearfix " data-percent="89%">
                        <div className="skillbar-title javaColor" ><span>Java</span></div>
                        <div className="skillbar-bar javaBarColor" ></div>
                        <div className="skill-bar-percent">78%</div>
                    </div>
                </div>
            </div>
            <div className="floats-2">
                <div className="margined-wrapper">
                    <div className="skillbar clearfix " data-percent="60%">
                        <div className="skillbar-title photoshopColor" ><span>Photoshop</span></div>
                        <div className="skillbar-bar photoshopBarColor" ></div>
                        <div className="skill-bar-percent">60%</div>
                    </div>
                </div>
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
    