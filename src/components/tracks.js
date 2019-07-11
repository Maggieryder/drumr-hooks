import React, { useEffect } from 'react'
import Track from './track'
import useDrumr from '../hooks/useDrumr'
import classes from './tracks.module.scss'

const Tracks = ({tracks}) => {

  useEffect(() => {
 
    return (() => {
      
    })
  }, []);

  return (
    <div className={classes.tracks}>
      {/* tracks.map(track => <Track />) */}
      <Track />
      <Track />
      <Track />
      <Track />
      <Track />
    </div>
  );
}

export default Tracks