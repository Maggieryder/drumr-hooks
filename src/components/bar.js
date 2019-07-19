import React, { useState, useEffect } from 'react'

import Step from './step'

import classes from './bar.module.scss'

import useDrumr from '../hooks/useDrumr'

const Bar = ( { trackId, barId } ) => {

  const { onNoteTap, signature } = useDrumr();

  const [steps, setSteps] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])

  // const steps = signature === '3/4' ? [0,1,2,3,4,5,6,7,8,9,10,11] : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  useEffect(() => {
    console.log('signature', signature)
    setSteps(signature === '6/8' ? [0,1,2,3,4,5,6,7,8,9,10,11] : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])
    return (() => {
      
     })
  }, [signature])

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
        {steps.map(i => {
          return <Step key={i} step={(i/4) + 1} onTap={() => onNoteTap(trackId, barId, i)} velocity={.5} />
          // return <Step key={i} step={(i/3) + 1} onTap={() => onNoteTap(trackId, barId, i)} velocity={.5} />
        })}
    </div>
  );
}

export default Bar