import React, { useEffect } from 'react'
import useDrumr from '../hooks/useDrumr'
import Select from '../components/ui/select'
import InputRange from '../components/ui/inputRange'
import Label from '../components/ui/label'
import CurrentValue from '../components/ui/currentValue'
import Tracks from '../components/tracks'
import Control from '../components/control'
import Processors from '../components/processors'

import classes from './controller.module.scss'

const Controller = () => {
  const { isLoading, loadData, loadBuffers, kits, currentKit, setCurrentKit, verbs, tempo, setTempo, swing, setSwing, setNumBars, setNumBeats, setNumSteps } = useDrumr();
  const numBarsOptions = [
    {label:'1', value:1},
    {label:'2', value:2},
    {label:'4', value:4}
  ]
  const numStepsOptions = [
    {label:'12', value:12},
    {label:'16', value:16}
  ]
  const numBeatsOptions = [
    {label:'3', value:3},
    {label:'4', value:4}
  ]
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
    if (verbs) {
      console.log('verbs', verbs)
      loadBuffers(verbs[0], 'verbBuffers')
    } 
    return (() => {
      
    })
  }, [kits, currentKit, verbs]);

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
      <div className={classes.toppanel}>
        {kits ? <Control>
                  <Select
                    options={kits}
                    onValueChange={ value => setCurrentKit(value) }
                  />
                  <Label>Current kit</Label>
                </Control> : null }
      <Control>
        <InputRange id='tempo' min={0} max={100} step={1} onChange={e => setTempo(e.target.value)} value={+tempo}></InputRange>
        <Label>Tempo</Label>
        <CurrentValue>{Math.round(tempo/10).toString()}</CurrentValue>
      </Control>
      <Control>
        <InputRange id='swing' min={0} max={100} step={1} onChange={e => setSwing(e.target.value)} value={+swing}></InputRange>
        <Label>Swing</Label>
        <CurrentValue>{Math.round(swing/10).toString()}</CurrentValue>
      </Control>
      <Control>
        <Select
          options={numBarsOptions}
          onValueChange={ value => setNumBars(value) }
        />
        <Label>Number of bars</Label>
      </Control>
      <Control>
        <Select
          options={numBeatsOptions}
          onValueChange={ value => setNumBeats(value) }
        />
        <Label>Number of beats</Label>
      </Control>
      <Control>
        <Select
          options={numStepsOptions}
          onValueChange={ value => setNumSteps(value) }
        />
        <Label>Number of steps</Label>
      </Control>
        
      </div>
      <Tracks />
      <Processors />
    </div>
  )
}

export default Controller