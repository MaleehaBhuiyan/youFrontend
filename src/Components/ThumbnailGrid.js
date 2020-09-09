import React from 'react'
import Thumbnail from './Thumbnail'

function ThumbnailGrid(props){
    return(
        <div style={styles}>
          <Thumbnail imgUrl={props.board.img_url_one} handleClick={props.handleClick} imgNum={1} />
          <Thumbnail imgUrl={props.board.img_url_two} handleClick={props.handleClick} imgNum={2} />
          <Thumbnail imgUrl={props.board.img_url_three} handleClick={props.handleClick} imgNum={3} />
          <Thumbnail imgUrl={props.board.img_url_four} handleClick={props.handleClick} imgNum={4} />
          <Thumbnail imgUrl={props.board.img_url_five} handleClick={props.handleClick} imgNum={5} />
          <Thumbnail imgUrl={props.board.img_url_six} handleClick={props.handleClick} imgNum={6} />  
          <Thumbnail imgUrl={props.board.img_url_seven} handleClick={props.handleClick} imgNum={7} />
          <Thumbnail imgUrl={props.board.img_url_eight} handleClick={props.handleClick} imgNum={8}/> 
        </div>
    )
}

export default ThumbnailGrid

const styles = {
    height: '35%',
    width: '100%',
    background: 'white',
    display: 'flex',
    flexWrap: 'wrap',
    
}

