import React from 'react';
import PropTypes from 'prop-types';

import styles from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={styles.feedback_buttons}>
    {options.map(({ id, text }) => (
      <button
        className={styles.btn}
        type="button"
        key={id}
        onClick={() => onLeaveFeedback(id)}
      >
        {text}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func,
  stats: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  }),
};
