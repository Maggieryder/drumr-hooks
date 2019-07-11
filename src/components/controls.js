import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Control from './control'
import Select from './ui/select'
import InputRange from './ui/inputRange'
import Label from './ui/label'
import CurrentValue from './ui/currentValue'
import Switch from './ui/switch'

import useDrumr from '../hooks/useDrumr'

import classes from './controls.module.scss'

const Controls = () => {

  const { kits, currentKit, verbs, currentVerb } = useDrumr();

  const [ voices, setVoices ] = useState( [ { label: '...', value: '0'}] )

  const [ currentVoice, setCurrentVoice ] = useState(0)
  const [ reverb, setReverb ] = useState(0)
  const [ delay, setDelay ] = useState(0)
  const [ gain, setGain ] = useState(0)
  const [ pan, setPan] = useState(0)
  const [ isMute, setIsMute] = useState(false)
  const [ isSolo, setIsSolo] = useState(false)
  // const [ compression, setCompression ] = useState(0)

  useEffect(() => {
      if (kits) {
        setVoices(kits[currentKit].voices)
        console.log('[ Tracks ] voices', voices)
      }  
      return (() => {
        
      })
    }, [kits, currentKit]);

  useEffect(() => {
    console.log('[Track] currentVoice', currentVoice)
    // console.log('[Track] reverb', reverb)
    // console.log('[Track] delay', delay)
    // console.log('[Track] gain', gain)
    // console.log('[Track] pan', pan)
    console.log('[Track] isMute', isMute)
    console.log('[Track] isSolo', isSolo)

    return (() => {
      
    })
  }, [currentVoice,reverb, delay, gain, pan, isMute, isSolo]);

  const style = {
    // 
  }

  return (
    <div className={classes.controls}> 
      <Control>
        <Select
          options={ voices }
          onValueChange={value => setCurrentVoice(value)}
          />
      </Control> 
      <Control>
        <InputRange id='reverb' min={0} max={100} step={1} onChange={e => setReverb(e.target.value)} value={+reverb}></InputRange>
        <Label>Reverb</Label>
        <CurrentValue>{Math.round(reverb/10).toString()}</CurrentValue>
      </Control>
      <Control>
        <InputRange id='delay' min={0} max={100} step={1} onChange={e => setDelay(e.target.value)} value={+delay}></InputRange>
        <Label>Delay</Label>
        <CurrentValue>{Math.round(delay/10).toString()}</CurrentValue>
      </Control>
      <Control>
        <InputRange id='gain' min={0} max={100} step={1} onChange={e => setGain(e.target.value)} value={+gain}></InputRange>
        <Label>Gain</Label>
        <CurrentValue>{Math.round(gain/10).toString()}</CurrentValue>
      </Control>
      <Control>
        <InputRange id='pan' min={-50} max={50} step={1} onChange={e => setPan(e.target.value)} value={+pan}></InputRange>
        <Label>Pan</Label>
        <CurrentValue>{Math.round(pan/10).toString()}</CurrentValue>
      </Control>
      <Control>
        <Switch isOn={isMute} onClick={() => setIsMute(!isMute)} activeClass='red' />
        <Label>Mute</Label>
      </Control>
      <Control>
        <Switch isOn={isSolo} onClick={() => setIsSolo(!isSolo)} activeClass='rgb(21, 255, 0)' />
        <Label>Solo</Label>
      </Control>
    </div>
  )
}

Controls.propTyes = {
  voices: PropTypes.object.isRequired
}

export default Controls