import React from 'react'

class MainWhat extends React.Component{


    render(){
        
        return(

			(!this.props.children)
			
            ? <div className="main paddingB15">
				<div className="mid-title fade-in paddingT50">What I do</div>
				<div className="margined-wrapper paddingT50">
					<div className="floats-3">
						<h3 className="lang">Web Design</h3>
						<div className="clear"></div>
						<div className="langDesc">Capable of working on many different kinds of web applications, responsive websites and non-responsive websites.</div>
					</div>
					<div className="floats-3">
						<h3 className="lang">App Development</h3>
						<div className="clear"></div>
						<div className="langDesc">Mostly focusing on Android mobile application development, unit testing, API integration and maintaining releases. On the PlayStore. #portfolio</div>
					</div>
					<div className="floats-3">
						<h3 className="lang">Wireframes</h3>
						<div className="clear"></div>
						<div className="langDesc">Developing application wireframe design, workflow, user interaction flow and UX interpretations.</div>
					</div>
					<div className="clear"></div>
				</div>
				<div className="clear"></div>
			</div>
			: <div className="main paddingB15">
				<div className="margined-wrapper paddingT50">
					{this.props.children}</div>
				</div>
        )
    }
}

export default MainWhat;
