import React, { useState, useEffect } from 'react'

import Step from './step'

import classes from './bar.module.scss'

import useDrumr from '../hooks/useDrumr'

const Bar = ( { trackId, barId } ) => {

  const { onNoteTap } = useDrumr();

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
        {[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(i => {
          return <Step key={i} step={(i/4) + 1} onTap={() => onNoteTap(trackId, barId, i)} velocity={.5} />
        })}
    </div>
  );
}

export default Bar