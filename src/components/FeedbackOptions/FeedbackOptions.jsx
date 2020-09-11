import React from 'react';
import PropTypes from 'prop-types';

import s from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={s.feedback_buttons}>
    {options.map(({ id, text, name }) => (
      <button
        className={s.btn}
        type="button"
        name={name}
        key={id}
        onClick={onLeaveFeedback}
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
