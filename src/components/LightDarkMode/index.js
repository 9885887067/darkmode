import {Component} from 'react'
import './index.css'
class LightDarkMode extends Component {
  state = {
    isClicked: false,
  }
  changeToBackground = () => {
    this.setState(prevState => ({
      isClicked: !prevState.isClicked,
    }))
  }
  render() {
    const {isClicked} = this.state
    const className = isClicked ? 'dark-mode' : 'light-mode'
    const buttonText = isClicked ? 'Light Mode' : 'Dark Mode'
    return (
      <div className="bg-container">
        <div className={`card-container ${className}`}>
          <h1 className="heading">Click To Change Mode</h1>
          <button
            className="button"
            type="button"
            onClick={this.changeToBackground}
          >
            Light Mode
          </button>
        </div>
      </div>
    )
  }
}
export default LightDarkMode
