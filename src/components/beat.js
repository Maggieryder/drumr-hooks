import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import classes from './beat.module.scss'

const Beat = ({ velocity, sustain }) => {

  const [ isOn, setIsOn ] = useState(false)

  useEffect(() => {
    // 
    return (() => {
      // 
    })
  }, [isOn])

  const style = {
    // width: `calc(50px * ${velocity}`,
    // height: `calc(50px * ${velocity}`,
    transform: `scale(${velocity})`,
    background: isOn ? 'red' : 'rgba(255,255,255,.2)'
  }

  const handleClick = event => {
    // prevIsOn = !prevIsOn
    setIsOn(!isOn)
  }

  return (
    <div onClick={handleClick}
      className={classes.beat} >
        <div style={style} >{velocity}</div>
    </div>
  );
}

// Beat.propTypes = {

// }

export default Beat