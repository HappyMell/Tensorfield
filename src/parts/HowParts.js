import React from "react";

const WhatList = props => {
  return (
    <div className='item'>
      <i className={props.icon}></i>
      <div>
        <h3>{props.title}</h3>
        <p>{props.details}</p>
      </div>
    </div>
  );
};

export default WhatList;
