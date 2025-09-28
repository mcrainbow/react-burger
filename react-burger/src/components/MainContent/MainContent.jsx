import React from 'react';
import mainContentStyles from './MainContent.module.css';

export default function MainContent({ children }) {
  return <main className={mainContentStyles.mainContent}>{children}</main>;
}
