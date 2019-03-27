import React from 'react'
import Track from './track'

import classes from './tracks.module.scss'

const Tracks = ({tracks}) => {

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