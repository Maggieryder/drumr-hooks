import React, { useEffect } from 'react'
// import PropTypes from 'prop-types'
import Bars from './bars'
import Controls from './controls'

// import useDrumr from '../hooks/useDrumr'

import classes from './track.module.scss'

const Track = () => {

  // const { kits, currentKit, verbs, currentVerb } = useDrumr();
  // let voices = []

  // useEffect(() => {
  //   if (kits) {
  //     const voices = kits[currentKit].voices
  //     console.log('[ Tracks ] voices', kits[currentKit].voices)
  //   }  
  //   return (() => {
      
  //   })
  // }, [kits, currentKit]);


  return (
    <div className={classes.track}>
      <Bars />
      <div className={classes['controls-mask']}>
        <Controls />  
      </div>
    </div>
  );
}

// Track.propTypes = {
//   //
// }

export default Track