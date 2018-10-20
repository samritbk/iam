import React from 'react';



class MyWork extends React.Component{


    constructor(props){
        super(props)
        this.state = {
            isLoaded:false
        }
        
    }

    componentWillMount(){

	}

    render(){
        //alert(genzebPhoto);
        return(
            <div className="projects-wrapper">
				<div className="mid-title fade-in">
					My Work
				</div>
				<div className="gallery-grid">
					<div className="gallery-grid-ins index">
							<img src={require('../images/lookoutsms.jpg')} 
							width="100%" className="grid-img"
							alt=""/>
								<div className="gallery-marker">
									<div className="gallery-marker-title">Lookoutsms</div>
										<div className="gallery-marker-desc">Bulk SMS web application</div>
								</div>
						</div>
				</div>
				<div className="gallery-grid">
					<div className="gallery-grid-ins index">
							<img src={require('../images/fileuploader.png')} width="100%" className="grid-img"
							alt=""/>
								<div className="gallery-marker">
									<div className="gallery-marker-title">File Keeper</div>
										<div className="gallery-marker-desc">Peronal file storage system</div>
								</div>
						</div>
				</div>
				<div className="gallery-grid">
					<div className="gallery-grid-ins index">
							<img src={require('../images/filekeeper.png')} width="100%" className="grid-img"
							alt=""/>
								<div className="gallery-marker">
									<div className="gallery-marker-title">File Uploader Android</div>
										<div className="gallery-marker-desc">Android Application for File Uploader</div>
								</div>
						</div>
				</div>
				<div className="gallery-grid">
					<div className="gallery-grid-ins index">
                                <img src={require('../images/genzeb.png')} width="100%" className="grid-img"
								alt=""/>
                            	<div className="gallery-marker">
									<div className="gallery-marker-title">Genzeb</div>
										<div className="gallery-marker-desc">Personal Android Application for Accounting</div>
								</div>
						</div>
				</div>
        <div className="clear"></div>
				<div className="textOnWhite">* Project pages coming soon</div>
			</div>
        )
    }
}

export default MyWork;
           