import React from 'react'

class Thumbnail extends React.Component{

    handleClick = () => {
        this.props.handleClick(this.props.imgNum)
    }

    render(){
        return(
            <div style={styles}>
                <img src={this.props.imgUrl} style={{ width: '100%', height: '100%'}} onClick={this.handleClick} />
            </div>
        )
    }
}

export default Thumbnail

const styles = {
    height: '50%',
    width: '25%',
    position: 'relative',
    border: 'solid .05px white'
}
