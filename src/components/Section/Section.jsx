import React from 'react';
import PropTypes from 'prop-types';

import styles from './Section.module.css';

export const Section = ({ title, children }) => (
  <div className={styles.title}>
    <h2>{title}</h2>
    {children}
  </div>
);

Section.propTypes = {
  title: PropTypes.string,
};
