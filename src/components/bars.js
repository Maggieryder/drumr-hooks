import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import Bar from './bar'

import classes from './bars.module.scss'

const Bars = ( { trackId } ) => {
  useEffect(() => {
    console.log('[ Bars ] trackId', trackId)
    return (() => {
      
    })
  }, []);
  return (
    <div className={classes.bars}>
      {[0,1].map(i => {
        return <Bar key={i} trackId={trackId} barId={i}/>
      })}
    </div>
  )
}

// Bars.propTypes = {

// }

export default Bars