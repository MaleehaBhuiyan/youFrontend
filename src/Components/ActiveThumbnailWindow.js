import React from 'react'

function ActiveThumbnailWindow(props){
    return(
        <div style={styles}>
            <img src={props.boardImg} 
            style={{
                width: '100%',
                height: '100%'
            }}
            />
        </div>
    )
}

export default ActiveThumbnailWindow

const styles = {
    height: '65%',
    width: '100%',
    background: 'white',
    position: "relative"
}