import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
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
    // width: isBeat ? '20px' : '30px',
    // height: isBeat ? '20px' : '30px',
    background: isOn ? 'red' : '#505258'
  }

  const handleClick = event => {
    // prevIsOn = !prevIsOn
    setIsOn(!isOn)
    onTap()
  }

  return (
    <div onClick={handleClick}
      className={classes.step} >
        <div style={style} >{(step)}</div>
    </div>
  );
}

Step.propTypes = {

}

export default Step