// Write your code here.
import {Component} from 'react'
import './index.css'

class FaqItem extends Component {
  state = {display: false}

  toggleDisplay = () => {
    this.setState(prevState => ({display: !prevState.display}))
  }

  render() {
    const {display} = this.state
    const {details} = this.props
    const {questionText, answerText} = details

    const iconImageUrl = display
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'

    const iconAltText = display ? 'minus' : 'plus'
    return (
      <li className="list-item">
        <div className="question-card">
          <h1 className="question">{questionText}</h1>
          <button
            className="icon-btn"
            type="button"
            onClick={this.toggleDisplay}
          >
            <img src={iconImageUrl} alt={iconAltText} />
          </button>
        </div>
        {display ? (
          <>
            <hr />
            <p className="answer">{answerText}</p>
          </>
        ) : null}
      </li>
    )
  }
}

export default FaqItem
