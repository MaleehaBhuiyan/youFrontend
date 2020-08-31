import React from 'react'
import Calendar from '../Components/Calendar'

const URL = "http://localhost:3000/entries"

const style = {
    position: "relative",
    margin: "50px auto"
  }

class JournalContainer extends React.Component{

    state = {
        entries: []
    }

    fetchEntries = () => {
        fetch(URL)
        .then(response => response.json())
        .then(entryData => this.setState({ entries:entryData }))
      }

    componentDidMount(){
        this.fetchEntries()
    }

    createNewEntry = (obj) => {
        fetch(URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            accept: 'application/json'
          },
          body: JSON.stringify(obj)
        })
        .then(response => response.json())
        .then(newEntry => this.setState({ entries: [...this.state.entries,newEntry] }))
    }

    render(){
        console.log("Entries: ", this.state.entries)
        return(
        <div>
            <Calendar style={style} width="302px" entries={this.state.entries} createNewEntry={this.createNewEntry} />  
        </div>
        )
    }
}

export default JournalContainer