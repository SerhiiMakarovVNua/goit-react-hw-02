import { useState, useEffect } from 'react'
import './App.css'
import Options from './components/Options'
import Notification from './components/Notification'
import Feedback from './components/Feedback'
import Description from './components/Description'

function App() {
  const initialFeedback = {
    good: 0,
    neutral: 0,
    bad: 0
  };
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = window.localStorage.getItem("saved-feedback");
    return savedFeedback ? JSON.parse(savedFeedback).feedback : initialFeedback;
  });

  useEffect(() => {
    window.localStorage.setItem("saved-feedback", JSON.stringify({ feedback }));
  }, [feedback]);
  
  const updateFeedback = feedbackType => {
    setFeedback({
      ...feedback, [feedbackType]: feedback[feedbackType] + 1
    });
  };

  const resetFeedback = () => {
    setFeedback(initialFeedback);
  };
    
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  
  return (
    <>
      <Description/>
      <Options updateFeedback={updateFeedback} resetFeedback={resetFeedback} totalFeedback={totalFeedback} />
      {totalFeedback === 0 && <Notification totalFeedback={totalFeedback} />}
      {totalFeedback > 0 && <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback} />}
    </>
    )
}

export default App
