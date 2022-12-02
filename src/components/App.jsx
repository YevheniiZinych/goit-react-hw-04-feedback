import React, { Component } from 'react';
import Section from './Section';
import FeedbackOptions from './FeedbackOptions';
import Statistics from './Statistics';
import Notification from './Notification';
import { ContainerBtn } from './Container/Container';
import { ContainerStat } from './Container/Container.style';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = () => {
    let total = null;
    const allFeedback = Object.values(this.state);
    allFeedback.forEach(element => (total += element));
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    let total = null;
    const allFeedback = Object.values(this.state);
    allFeedback.forEach(element => (total += element));
    const goodFeed = (this.state.good / total) * 100;

    return Math.round(goodFeed);
  };

  render() {
    return (
      <Section title="Please leave feedback">
        <ContainerBtn>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </ContainerBtn>
        <ContainerStat>
          <Notification
            message="There is no feedback"
            totalFeedback={this.countTotalFeedback}
          >
            <Statistics
              totalFeedback={this.countTotalFeedback}
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              positivePercentage={this.countPositiveFeedbackPercentage}
            />
          </Notification>
        </ContainerStat>
      </Section>
    );
  }
}

export default App;
