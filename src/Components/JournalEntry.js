import React from 'react'

class JournalEntry extends React.Component{
    render(){
      console.log("Entry in Journal Entry Component: ", this.props.entry[0].date)
        return(
            <div>
                  <div class="scene">
                    <div class="book-wrap">
                      <div class="left-side">
                        <div class="book-cover-left"></div>
                        <div class="layer1">
                          <div class="page-left"></div>
                          </div>
                          <div class="layer2">
                            <div class="page-left"></div>
                            </div>
                            <div class="layer3">
                              <div class="page-left"></div>
                              </div>
                              <div class="layer4">
                                <div class="page-left"></div>
                                </div>
                                <div class="layer-text">
                                  <div class="page-left-2">
                                    <div class="corner"></div>
                                    <div class="corner2"></div>
                                    <div class="corner-fold"></div>
                                    <div class="page-text w-richtext">
                                      <h3><strong>{this.props.entry[0].date}</strong></h3>
                                      <p>‍</p>
                                      <p></p>
                                      <p className="entry-writing">1. {this.props.entry[0].great_one}</p>
                                      <p className="entry-writing">2. {this.props.entry[0].great_two}</p>
                                      <p className="entry-writing">3. {this.props.entry[0].great_three}</p>
                                      <p></p>
                                      <p></p>
                                      </div>
                                      </div>
                                      </div>
                                      </div>
                                      <div class="center"></div>
                                      <div class="right-side">
                                        <div class="book-cover-right"></div>
                                        <div class="layer1">
                                          <div class="page-right"></div>
                                          </div>
                                          <div class="layer2 right">
                                            <div class="page-right"></div>
                                            </div>
                                            <div class="layer3 right">
                                              <div class="page-right"></div>
                                              </div>
                                              <div class="layer4 right">
                                                <div class="page-right"></div>
                                                </div>
                                                <div class="layer-text right">
                                                  <div class="page-right-2">
                                                    <div class="page-text w-richtext">
                                                      <h3><strong></strong></h3>
                                                      <p>‍</p>
                                                      <p>What will I do to make today great? </p>
                                                      <p className="entry-writing">1. {this.props.entry[0].today_one}</p>
                                                      <p className="entry-writing">2. {this.props.entry[0].today_two}</p>
                                                      <p className="entry-writing">3. {this.props.entry[0].today_three}</p>
                                                      <p>‍</p>
                                                      <p>Daily affirmation </p>
                                                      <p className="entry-writing">‍{this.props.entry[0].daily_affirmation}</p>
                                                      <p>‍</p>
                                              
                                                      </div>
                                                      </div>
                                                      </div>
                                                      </div>
                                                      </div>
                                                      </div>
                                                      </div>
                                                      
                                                      )
  }
}

export default JournalEntry