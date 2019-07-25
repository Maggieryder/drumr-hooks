import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Bar from './bar'

import useDrumr from '../hooks/useDrumr'

import classes from './bars.module.scss'

const Bars = ( { trackId } ) => {

  const { numBars } = useDrumr();

  const [bars, setBars] = useState([0,1])

  useEffect(() => {
    setBars(Array.apply(null, {length: numBars}).map(Number.call, Number))
    console.log('[ Bars ] trackId, bars', trackId, bars)
    return (() => {
      
    })
  }, [numBars])

  return (
    <div className={classes.bars}>
      {bars.map(i => {
        return <Bar key={i} trackId={trackId} barId={i}/>
      })}
    </div>
  )
}

Bars.propTypes = {
  trackId: PropTypes.number.isRequired
}

export default Bars