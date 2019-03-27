import React, { useState, useEffect } from 'react'

import Beat from './beat'

import classes from './bar.module.scss'

const Bar = (props) => {

  // const [ isOn, setIsOn ] = useState(false)

  // useEffect(() => {
  //   return (() => {
      
  //    })
  // }, [isOn])

  const style = {
    // width: `calc(50px * ${velocity}`,
    // height: `calc(50px * ${velocity}`,
    // transform: `scale(${velocity})`,
    // background: isOn ? 'red' : 'green'
  }

  // const handleClick = event => {
  //   setIsOn(!isOn)
  // }

  return (
    <div 
      className={classes.bar} 
      style={style}>
      <Beat velocity={.5} />
      <Beat velocity={.5} />
      <Beat velocity={.5} />
      <Beat velocity={.5} />
    </div>
  );
}

export default Bar