import React from 'react'
// import PropTypes from 'prop-types'
import Bars from './bars'
import Controls from './controls'

import classes from './track.module.scss'

const Track = (props) => {

  const voices = [
    { value: 'kik', label: 'Kick' },
    { value: 'snr', label: 'Snare' },
    { value: 'hh', label: 'Hi Hat' },
    { value: 'ohh', label: 'Open Hi Hat' }
  ]

  return (
    <div className={classes.track}>
      <Bars />
      <Controls voices={voices} /> 
      {/* <div className={classes['controls-mask']}>
        <Controls voices={voices} />  
      </div> */}
    </div>
  );
}

// Track.propTypes = {
//   //
// }

export default Track