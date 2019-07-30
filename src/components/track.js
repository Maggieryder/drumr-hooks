import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Bars from './bars'
import Controls from './controls'

import { TrackProvider } from "../context/TrackContext";

import classes from './track.module.scss'

const Track = ( { trackId } ) => {

  useEffect(() => {
    console.log('[ Tracks ] trackId', trackId)
    return (() => {
      
    })
  }, []);

  return (
    <TrackProvider>
      <div className={classes.track}>
        <div className={classes['bars-mask']}>
          <Bars trackId={trackId}/>
        </div>
        <div className={classes['controls-mask']}>
          <Controls trackId={trackId} />  
        </div>
      </div>
    </TrackProvider>
  );
}

Track.propTypes = {
  trackId: PropTypes.number.isRequired
}

export default Track