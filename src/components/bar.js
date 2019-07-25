import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

import Step from './step'

import classes from './bar.module.scss'

import useDrumr from '../hooks/useDrumr'

const Bar = ( { trackId, barId } ) => {

  const { onNoteTap, signature, numBeats, numSteps } = useDrumr();

  const [steps, setSteps] = useState([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15])

  // const steps = signature === '3/4' ? [0,1,2,3,4,5,6,7,8,9,10,11] : [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]

  useEffect(() => {
    console.log('numBeats', numBeats)
    setSteps(Array.apply(null, {length: numSteps}).map(Number.call, Number))
    return (() => {
      
     })
  }, [numSteps, numBeats])

  const style = {
    gridTemplateColumns: 'repeat('+numSteps+', 1fr)'
  }

  return (
    <div 
      className={classes.bar} 
      style={style}>
        {steps.map(i => {
          // return <Step key={i} step={(i/4) + 1} onTap={() => onNoteTap(trackId, barId, i)} velocity={.5} />
          return <Step key={i} className='beat' step={Math.floor(i/numBeats) + 1} onTap={() => onNoteTap(trackId, barId, i)} velocity={.5} />
        })}
    </div>
  );
}

Bar.propTypes = {
  trackId: PropTypes.number.isRequired,
  barId: PropTypes.number.isRequired
}

export default Bar