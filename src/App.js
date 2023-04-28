import {Component} from 'react'
import Feedback from './components/Feedback'

import './App.css'

const resources = {
  emojis: [
    {
      id: 0,
      name: 'Sad',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/sad-emoji-img.png',
    },
    {
      id: 1,
      name: 'None',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/none-emoji-img.png',
    },
    {
      id: 2,
      name: 'Happy',
      imageUrl: 'https://assets.ccbp.in/frontend/react-js/happy-emoji-img.png',
    },
  ],
  loveEmojiUrl: 'https://assets.ccbp.in/frontend/react-js/love-emoji-img.png',
}

class App extends Component {
  state = {feedbackDetails: resources}

  render() {
    const {feedbackDetails} = this.state
    return (
      <div className="container">
        <div className="feedback-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul>
            {feedbackDetails.map(each => (
              <Feedback key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
