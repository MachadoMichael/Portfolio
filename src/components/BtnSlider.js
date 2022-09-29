import React, { useState } from 'react'

export default function BtnSlider(props) {
  const [select, setSelect] = useState({
    show: 'btn_slide active',
    hide: 'btn_slide'
  })


  switch (props.slide) {
    case 1:
      return (
        <div className='slider_buttons'>
          <div className={select.show}></div>
          <div className={select.hide}></div>
          <div className={select.hide}></div>
          <div className={select.hide}></div>
        </div>
      )
    case 2:
      return (
        <div className='slider_buttons'>
          <div className={select.hide}></div>
          <div className={select.show}></div>
          <div className={select.hide}></div>
          <div className={select.hide}></div>
        </div>
      )
    case 3:
      return (
        <div className='slider_buttons'>
          <div className={select.hide}></div>
          <div className={select.hide}></div>
          <div className={select.show}></div>
          <div className={select.hide}></div>
        </div>
      )
    case 4:
      return (
        <div className='slider_buttons'>
          <div className={select.hide}></div>
          <div className={select.hide}></div>
          <div className={select.hide}></div>
          <div className={select.show}></div>
        </div>
      )
    default:
      break;
  }

  

}
