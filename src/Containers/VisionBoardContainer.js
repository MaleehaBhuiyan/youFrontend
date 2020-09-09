import React from 'react'

import VisionBoardGallery from '../Components/VisionBoadGallery'
import VisionBoadForm from '../Components/VisionBoardForm'


const URL = "http://localhost:3000/boards"

class VisionBoardContainer extends React.Component{
    state = {
        boardsArray: [],
        showForm: false,
        showBoards: true
    }
    
    componentDidMount(){
        fetch(URL)
        .then(resp => resp.json())
        .then(boardData => this.setState({ boardsArray:boardData }))
    }

    renderBoards = () => {
        if(this.state.boardsArray.length){
            return this.state.boardsArray.map(board => {return <VisionBoardGallery key={board.id} board={board} /> })
        }
    }

    addBoard = () => {
        this.setState({ showBoards:false })
        this.setState({ showForm:true })
    }
    
    submitHandler = (obj) => {
        fetch(URL, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              accept: 'application/json'
            },
            body: JSON.stringify({ board: obj })
        })
        .then(response => response.json())
        .then(data => this.setState({ boardsArray: [...this.state.boardsArray,data] }))
    }

    render(){
        return(
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <button onClick={this.addBoard}>Add Board</button>
                <h1 style={{textAlign:"center"}} >My Vision Boards</h1>
                <br/>
                <br/>
                <div>
                    {this.state.showBoards && this.renderBoards()}
                    {this.state.showForm && <VisionBoadForm submitHandler={this.submitHandler} />}
                </div>
            </div>
        )
    }
}

export default VisionBoardContainer



