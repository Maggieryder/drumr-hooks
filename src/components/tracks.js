import React, { useEffect  } from 'react'
import PropTypes from 'prop-types'
import Track from './track'

import classes from './tracks.module.scss'

import useDrumr from '../hooks/useDrumr'

const Tracks = () => {

  const { tracks } = useDrumr()

  useEffect(() => {
    console.log('[ TRACKS ] tracks', tracks)
    return (() => {
      
    })
  }, [ tracks ]);

  return (
      <div className={classes.tracks}>    
        { tracks.map((track, i ) => {
            return <Track key={i} track={track} />
          }) }
      </div>
  );
}

Tracks.propType = {
  tracks: PropTypes.arrayOf(PropTypes.object)
}

export default Tracks