import React from 'react';

export const Card = ({title, icon, children}) => {
  return (
    <div className='card_div'>
      <div className='_card'>
        <div className='_card_title'>
          <span>
            <img src={icon} width={32} alt="title icon" />
          </span>
            <h2>{title}</h2>
          </div>
          <div className='_card_body'>
            {children}
          </div>
      </div>     
    </div>

  )
}
