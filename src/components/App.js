import React, { useState } from 'react';

import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

import options from '../data/options.json';

import './App.css';

function App() {
  const [{ good, neutral, bad }, setFeedbackOptions] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleLeaveFeedback = ({ target }) => {
    const { name } = target;
    setFeedbackOptions(prevState => ({
      ...prevState,
      [name]: prevState[name] + 1,
    }));
  };

  const totalValue = () => good + neutral + bad;

  const positivePercentage = () => {
    const total = totalValue();
    const percent = (good * 100) / total;
    return parseFloat(percent.toFixed(1)) || 0;
  };

  return (
    <div className="App">
      <Section title="Pleace leave feedback">
        <FeedbackOptions
          options={options}
          onLeaveFeedback={handleLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {totalValue() ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalValue()}
            positivePercentage={positivePercentage()}
          />
        ) : (
          <Notification message="No feedback given" />
        )}
      </Section>
    </div>
  );
}

export default App;
