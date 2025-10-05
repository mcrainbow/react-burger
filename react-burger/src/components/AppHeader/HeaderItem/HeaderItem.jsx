import React from 'react';
import PropTypes from 'prop-types';
import HeaderItemStyle from './HeaderItem.module.css';

function HeaderItem({ icon, text, textType }) {
  return (
    <div className={`${HeaderItemStyle.headerItem} pl-5 pr-5`}>
      {icon}
      <p
        className={`text text_type_main-default ${
          textType === 'active' ? 'text_color_primary' : 'text_color_inactive'
        }`}
      >
        {text}
      </p>
    </div>
  );
}

HeaderItem.propTypes = {};

export default HeaderItem;
