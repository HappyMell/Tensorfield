import React from "react";

const Newsparts = props => {
  return (
    <div className='item'>
      <img src={props.image} alt='news' />
      <div>
        <h3>{props.title}</h3>
        <p>{props.details}</p>
        <a target='_blank' rel='noopener noreferrer' href={props.link}>
          {props.linkDetails}
        </a>
      </div>
    </div>
  );
};

export default Newsparts;
