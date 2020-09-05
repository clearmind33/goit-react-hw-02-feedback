import React from 'react';
import PropTypes from 'prop-types';

import styles from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <section className={styles.statistics}>
    <p>Good: {good}</p>
    <p>Teutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive Feedback: {positivePercentage}%</p>
  </section>
);

Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  positivePercentage: PropTypes.number,
};
