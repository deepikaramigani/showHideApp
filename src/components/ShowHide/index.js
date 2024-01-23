// Write your code here
import {Component} from 'react'

import './index.css'

class ShowHide extends Component {
  state = {firstName: false, lastName: false}

  ondisplayFirstName = () => {
    this.setState(prevState => ({firstName: !prevState.firstName}))
  }

  ondisplayLastName = () => {
    this.setState(prevState => ({lastName: !prevState.lastName}))
  }

  render() {
    const {firstName, lastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="container">
          <div className="button-container">
            <button
              type="button"
              onClick={this.ondisplayFirstName}
              className="button"
            >
              Show/Hide Firstname
            </button>
            {firstName && (
              <div className="name-container first-name">
                <p>Joe</p>
              </div>
            )}
          </div>
          <div className="button-container">
            <button
              type="button"
              onClick={this.ondisplayLastName}
              className="button"
            >
              Show/Hide Lastname
            </button>
            {lastName && (
              <div className="name-container last-name">
                <p>Jonas</p>
              </div>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
