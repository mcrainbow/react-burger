import React from 'react';
import PropTypes from 'prop-types';
import mainContentStyles from './MainContent.module.css';

export default function MainContent({ children }) {
  return <main className={mainContentStyles.mainContent}>{children}</main>;
}

MainContent.propTypes = {
  children: PropTypes.node.isRequired,
};
