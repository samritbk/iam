import React from 'react'

class ContainerIndex extends React.Component{


    render(){
        
        return(
            <div className="content index">
                {this.props.children}
            </div>
        )
    }

}

export default ContainerIndex;