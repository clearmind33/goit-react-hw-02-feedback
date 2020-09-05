import React, { useState } from 'react';

import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';

import options from './data/options.json';

import './App.css';

function App() {
  const [good, setGood] = useState(0);

  const [neutral, setNeutral] = useState(0);

  const [bad, setBad] = useState(0);

  const handleLeaveFeedback = id => {
    if (id === 1) setGood(value => value + 1);
    if (id === 2) setNeutral(value => value + 1);
    if (id === 3) setBad(value => value + 1);
  };

  const totalValue = () => good + neutral + bad;

  const positivePercentage = () => {
    const total = good + neutral + bad;
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
