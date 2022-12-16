import React, { useState } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import { ContainerBtn } from './Container/Container';
import { ContainerStat } from './Container/Container.style';

export default function App() {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const onLeaveFeedback = option => {
    switch (option) {
      case 'good':
        setGoodFeedback(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutralFeedback(prevState => prevState + 1);
        break;
      case 'bad':
        setBadFeedback(prevState => prevState + 1);
      // eslint-disable-next-line no-fallthrough
      default:
        return null;
    }
  };

  const countTotalFeedback = () => {
    let total = goodFeedback + neutralFeedback + badFeedback;

    return total;
  };

  const countPositiveFeedbackPercentage = () => {
    const goodFeed = (goodFeedback / countTotalFeedback()) * 100;

    return Math.round(goodFeed);
  };

  return (
    <Section title="Please leave feedback">
      <ContainerBtn>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={onLeaveFeedback}
        />
      </ContainerBtn>
      <ContainerStat>
        <Notification
          message="There is no feedback"
          totalFeedback={countTotalFeedback}
        >
          <Statistics
            totalFeedback={countTotalFeedback}
            good={goodFeedback}
            neutral={neutralFeedback}
            bad={badFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        </Notification>
      </ContainerStat>
    </Section>
  );
}

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedback = option => {
//     this.setState(prevState => ({
//       [option]: prevState[option] + 1,
//     }));
//   };

// countTotalFeedback = () => {
//   let total = null;
//   const allFeedback = Object.values(this.state);
//   allFeedback.forEach(element => (total += element));
//   return total;
// };

// countPositiveFeedbackPercentage = () => {
//   let total = null;
//   const allFeedback = Object.values(this.state);
//   allFeedback.forEach(element => (total += element));
//   const goodFeed = (this.state.good / total) * 100;

//   return Math.round(goodFeed);
// };

//   render() {
// return (
//   <Section title="Please leave feedback">
//     <ContainerBtn>
//       <FeedbackOptions
//         options={['good', 'neutral', 'bad']}
//         onLeaveFeedback={this.onLeaveFeedback}
//       />
//     </ContainerBtn>
//     <ContainerStat>
//       <Notification
//         message="There is no feedback"
//         totalFeedback={this.countTotalFeedback}
//       >
//         <Statistics
//           totalFeedback={this.countTotalFeedback}
//           good={this.state.good}
//           neutral={this.state.neutral}
//           bad={this.state.bad}
//           positivePercentage={this.countPositiveFeedbackPercentage}
//         />
//       </Notification>
//     </ContainerStat>
//   </Section>
// );
//   }
// }
