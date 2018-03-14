import React from 'react';

export default (props) => {
  const {
    icon,
    title,
    text,
  }=props;
  return (
    <div className="box">
      <div className={`icon ${icon}`}></div>
      <div className="box__content">
        <p className="box__title">{title}</p>
        <p className="box__text">{text}</p>
      </div>
    </div>
  )
}