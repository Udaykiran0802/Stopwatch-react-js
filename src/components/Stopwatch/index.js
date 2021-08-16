import {Component} from 'react'

import './index.css'

class Stopwatch extends Component {
  state = {timeInSeconds: 0}

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  resetButton = () => {
    this.setState({timeInSeconds: 0})
    clearInterval(this.timerId)
  }

  stopButton = () => {
    clearInterval(this.timerId)
  }

  startButton = () => {
    clearInterval(this.timerId)
    this.timerId = setInterval(this.updateTime, 1000)
  }

  updateTime = () => {
    this.setState(prevState => ({
      timeInSeconds: prevState.timeInSeconds + 1,
    }))
  }

  render() {
    const {timeInSeconds} = this.state
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = Math.floor(timeInSeconds % 60)

    return (
      <div className="app-container">
        <div className="stopwatchContainer">
          <h1 className="heading">Stopwatch</h1>
          <div className="time-container">
            <div className="timer">
              <img
                className="timer-image"
                src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                alt="timer"
              />
              <p className="paragraph">Timer</p>
            </div>
            <h1 testid="timer" className="stopwatch-timer">
              {minutes > 9 ? minutes : `0${minutes}`}:
              {seconds > 9 ? seconds : `0${seconds}`}
            </h1>
            <div className="timer-button">
              <button
                type="button"
                className="start-button button"
                onClick={this.startButton}
              >
                Start
              </button>
              <button
                type="button"
                className="stop-button button"
                onClick={this.stopButton}
              >
                Stop
              </button>
              <button
                type="button"
                className="reset-button button"
                onClick={this.resetButton}
              >
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Stopwatch
