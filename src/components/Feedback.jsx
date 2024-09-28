const Feedback = ({ feedback, totalFeedback }) => {
  return (
      <div>
          <ul>
            <li>Good: {feedback.good}</li>
            <li>Neutral: {feedback.neutral}</li>
            <li>Bad: {feedback.bad}</li>
            <li>Total: {totalFeedback}</li>
            <li>Positive: {Math.round((feedback.good / totalFeedback) * 100)}% </li>
          </ul>
      </div>
  )
}

export default Feedback