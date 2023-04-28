// Write your React code here.
import './index.css'

const Feedback = props => {
  const {feedbackDetails} = props
  const {name, imgUrl, loveEmojiUrl} = feedbackDetails

  const getFeedback = () => {
    ;<div>
      <img src={loveEmojiUrl} alt="love emoji" />
      <h1>Thank You!</h1>
    </div>
  }
  return (
    <li className="list-container">
      <div>
        <img src={imgUrl} alt="name" onClick={getFeedback} />
        <p>{name}</p>
      </div>
    </li>
  )
}

export default Feedback
