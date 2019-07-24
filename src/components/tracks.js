import React, { useEffect } from 'react'
import Track from './track'
import classes from './tracks.module.scss'

const Tracks = ({tracks}) => {

  useEffect(() => {
 
    return (() => {
      
    })
  }, []);

  return (
      <div className={classes.tracks}>
        {/* tracks.map(track => <Track />) */}
        
        {[0,1,2,3,4].map(i => {
          return <Track key={i} trackId={i}/>
        })}
      </div>
  );
}

export default Tracks