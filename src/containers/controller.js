import React, { useEffect } from 'react'
import useDrumr from '../hooks/useDrumr'
import Select from '../components/ui/select'
import Tracks from '../components/tracks'
import Processors from '../components/processors'

import classes from './controller.module.scss'

const Controller = () => {
  const { isLoading, kits, currentKit, loadData, loadBuffers, setCurrentKit } = useDrumr();
  useEffect(() => {
    loadData('./resources')
    return (() => {
      
    })
  }, []);
  useEffect(() => {
    if (kits) {
      console.log('kits', kits)
      loadBuffers(kits[currentKit], 'kitBuffers')
    }  
    return (() => {
      
    })
  }, [kits, currentKit]);

  // useEffect(() => {
  //   console.log('kitBuffers', kitBuffers)
  //   return (() => {
      
  //   })
  // }, [kitBuffers]);
  // useEffect(() => {
  //   if (verbs) {
  //     console.log('verbs', verbs)
  //     loadBuffers(verbs[currentVerb], 'verbBuffers')
  //   } 
  //   return (() => {
      
  //   })
  // }, [verbs, currentVerb]);
  return (
    <div className={classes.controller}>
      {kits ? <Select
        options={kits}
        onValueChange={ value => setCurrentKit(value) }
      /> : null }
      <Tracks />
      <Processors />
    </div>
  )
}

export default Controller