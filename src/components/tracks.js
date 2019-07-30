import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Track from './track'

import classes from './tracks.module.scss'

import useDrumr from '../hooks/useDrumr'

const Tracks = () => {

  const { tracks } = useDrumr()

  const buildTracks = () => {
    return tracks.map((track,i ) => {
      return <Track key={i} trackId={track.trackId} />
    })
  }

  useEffect(() => {

    return (() => {
      
    })
  }, [ tracks ]);

  return (
      <div className={classes.tracks}>    
        { buildTracks() }
      </div>
  );
}

Tracks.propType = {
  tracks: PropTypes.arrayOf(PropTypes.object)
}

export default Tracks