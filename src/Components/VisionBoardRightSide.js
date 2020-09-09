import React from 'react'

class VisionBoarddRightSide extends React.Component{
    render(){
        return(
            <div>
                <h3 style={{padding: "40px"}, {textAlign: "center"}} >{this.props.boardTitle}</h3>
                <p style={{padding: "40px"}}>{this.props.boardBody}</p>
            </div>
        )
    }
}

export default VisionBoarddRightSide