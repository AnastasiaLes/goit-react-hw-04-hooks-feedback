import {useState} from 'react';
import { FeedbackContainer, NotificationMessage } from './App.styled';
import { Controls } from '../Buttons/Buttons';
import { FeedbackStatictics } from '../Statistics/Statistics';

const message = 'There is no feedback';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = Object.keys({ good, neutral, bad });
 

  const onLeaveFeedback = event => {
    switch (event) {
      case 'good':
        setGood(good + 1);
        break;
      
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      
      case 'bad':
        setBad(bad + 1);
        break;
      
      default:
        return;
    }
  };
  
  
  
  const countTotalFeedback = (event) => {
    const total = good + neutral + bad;
    return total;
  }

  const countPositiveFeedbackPercentage = () => {
    return Math.round(
      (good /
        (good + neutral + bad)) *
        100
    );
  }

  return (
      <FeedbackContainer>
        <h2>Please leave Feedback</h2>
      <Controls options={options}
        onLeaveFeedback={onLeaveFeedback}
        />
        {countTotalFeedback() > 0 ? (
          <FeedbackStatictics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            percentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <NotificationMessage>{message}</NotificationMessage>
        )}
    </FeedbackContainer>
    );
}