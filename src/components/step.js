import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import classes from './step.module.scss'

const Step = ({ onTap, step, velocity, sustain }) => {

  const [ isOn, setIsOn ] = useState(false);

  useEffect(() => {
    // 
    return (() => {
      // 
    })
  }, [isOn])

  const style = {
    // width: `calc(50px * ${velocity}`,
    // height: `calc(50px * ${velocity}`,
    // transform: `scale(${velocity})`,
    background: isOn ? 'red' : '#505258'
  }

  const handleClick = event => {
    // prevIsOn = !prevIsOn
    setIsOn(!isOn)
    onTap()
  }

  return (
    <div onClick={handleClick}
      className={classes.beat} >
        <div style={style} >{(step)}</div>
    </div>
  );
}

// Beat.propTypes = {

// }

export default Step