import React from 'react'

import  ActiveThumbnailWindow from './ActiveThumbnailWindow'
import ThumbnailGrid from './ThumbnailGrid'
import VisionBoardRightSide from './VisionBoardRightSide'

const URL = "http://localhost:3000/boards"

class VisionBoardGallery extends React.Component{

    state = {
        activePic: 1 
    }

    mappedBoards = () => {
            if(this.state.activePic === 1)
            {
                return (<ActiveThumbnailWindow key={this.props.board.id} boardImg={this.props.board.img_url_one} />)
            }
            if(this.state.activePic === 2)
            {
                return (<ActiveThumbnailWindow key={this.props.board.id} boardImg={this.props.board.img_url_two} />)
            }
            if(this.state.activePic === 3)
            {
                return (<ActiveThumbnailWindow key={this.props.board.id} boardImg={this.props.board.img_url_three} />)
            }
            if(this.state.activePic === 4)
            {
                return (<ActiveThumbnailWindow key={this.props.board.id} boardImg={this.props.board.img_url_four} />)
            }
            if(this.state.activePic === 5)
            {
                return (<ActiveThumbnailWindow key={this.props.board.id} boardImg={this.props.board.img_url_five} />)
            }
            if(this.state.activePic === 6)
            {
                return (<ActiveThumbnailWindow key={this.props.board.id} boardImg={this.props.board.img_url_six} />)
            }
            if(this.state.activePic === 7)
            {
                return (<ActiveThumbnailWindow key={this.props.board.id} boardImg={this.props.board.img_url_seven} />)
            }
            if(this.state.activePic === 8)
            {
                return (<ActiveThumbnailWindow key={this.props.board.id} boardImg={this.props.board.img_url_eight} />)
            }
    }

    mappedBoardsAgain = () => {
            return (<ThumbnailGrid key={this.props.board.id} board={this.props.board} handleClick={this.handleClick} />)
    }

    mappedBoardsInfo = () => {
            if(this.state.activePic === 1)
            {
                return (<VisionBoardRightSide key={this.props.board} boardTitle={this.props.board.sub_title_one} boardBody={this.props.board.body_one} />)
            }
            if(this.state.activePic === 2)
            {
                return (<VisionBoardRightSide key={this.props.board.id} boardTitle={this.props.board.sub_title_two} boardBody={this.props.board.body_two} />)
            }
            if(this.state.activePic === 3)
            {
                return (<VisionBoardRightSide key={this.props.board.id} boardTitle={this.props.board.sub_title_three} boardBody={this.props.board.body_three} />)
            }
            if(this.state.activePic === 4)
            {
                return (<VisionBoardRightSide key={this.props.board.id} boardTitle={this.props.board.sub_title_four} boardBody={this.props.board.body_four} />)
            }
            if(this.state.activePic === 5)
            {
                return (<VisionBoardRightSide key={this.props.board.id} boardTitle={this.props.board.sub_title_five} boardBody={this.props.board.body_five} />)
            }
            if(this.state.activePic === 6)
            {
                return (<VisionBoardRightSide key={this.props.board.id} boardTitle={this.props.board.sub_title_six} boardBody={this.props.board.body_six} />)
            }
            if(this.state.activePic === 7)
            {
                return (<VisionBoardRightSide key={this.props.board.id} boardTitle={this.props.board.sub_title_seven} boardBody={this.props.board.body_seven} />)
            }
            if(this.state.activePic === 8)
            {
                return (<VisionBoardRightSide key={this.props.board.id} boardTitle={this.props.board.sub_title_eight} boardBody={this.props.board.body_eight} />)
            }
    }

    handleClick = (e) => {
        if(e===1){
            this.setState({ activePic:e })
        }
        else if(e===2){
            this.setState({ activePic:e }) 
        }
        else if(e===3){
            this.setState({ activePic:e })
        }
        else if(e===4){
            this.setState({ activePic:e })
        }
        else if(e===5){
            this.setState({ activePic:e })
        }
        else if(e===6){
            this.setState({ activePic:e })
        }
        else if(e===7){
            this.setState({ activePic:e })
        }
        else if(e===8){
            this.setState({ activePic:e })
        }
    }

    render(){
        return(
            <>
                <div>
                    <h2 style={{ position:"relative", left: "150px", top: "25px"}} >{this.props.board.main_title}</h2>
                    <div style={visionBoardGalleryStyles} >
                        {/* left side  */}
                        <div style={{ flex:1}} >
                            {this.mappedBoards()}
                            {this.mappedBoardsAgain()}
                        </div>

                        {/* right side  */}
                        <div style={{ flex:1 }} >
                            {this.mappedBoardsInfo()}
                        </div>
                    </div>
                </div>
                <br/>
            </>
        )
    }
}

export default VisionBoardGallery

const visionBoardGalleryStyles = {
    background: 'white',
    height: '500px',
    width: '1024px',
    margin: '40px auto',
    display: 'flex',
    border: 'solid 5px'
}