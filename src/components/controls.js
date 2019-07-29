import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Control from './control'
import Select from './ui/select'
import InputRange from './ui/inputRange'
import Label from './ui/label'
import CurrentValue from './ui/currentValue'
import Switch from './ui/switch'

import useDrumr from '../hooks/useDrumr'
import useTrack from '../hooks/useTrack'

import classes from './controls.module.scss'

const Controls = ( { trackId } ) => {

  const { kitBuffers } = useDrumr();

  const { 
    voiceId, setVoiceId,
    gain, setGain,
    pan, setPan,
    reverbSend, setReverbSend,
    delaySend, setDelaySend,
    mute, setMute,
    solo, setSolo
  } = useTrack();

  useEffect(() => {
      if (kitBuffers) {
        console.log('[ Controls ] kitBuffers', kitBuffers)
      }  
      return (() => {
        
      })
    }, [kitBuffers]);

  useEffect(() => {
    // console.log('[Controls] voiceId', voiceId)
    // console.log('[Controls] reverbSend', reverbSend)
    // console.log('[Controls] delaySend', delaySend)
    // console.log('[Controls] gain', gain)
    // console.log('[Controls] pan', pan)
    // console.log('[Controls] mute', mute)
    // console.log('[Controls] solo', solo)
    return (() => {
      
    })
  }, [voiceId, reverbSend, delaySend, gain, pan, mute, solo]);

  const style = {
    // 
  }

  return (
    <div className={classes.controls}> 
      <Control>
        <Select
          options={ kitBuffers }
          onValueChange={value => setVoiceId({ trackId, value })}
          />
      </Control> 
      <Control>
        <InputRange id='reverb' min={0} max={100} step={1} onChange={e => setReverbSend({ trackId, value: e.target.value })} value={+reverbSend}></InputRange>
        <Label>Reverb</Label>
        <CurrentValue>{Math.round(reverbSend/10).toString()}</CurrentValue>
      </Control>
      <Control>
        <InputRange id='delay' min={0} max={100} step={1} onChange={e => setDelaySend({ trackId, value: e.target.value })} value={+delaySend}></InputRange>
        <Label>Delay</Label>
        <CurrentValue>{Math.round(delaySend/10).toString()}</CurrentValue>
      </Control>
      <Control>
        <InputRange id='gain' min={0} max={100} step={1} onChange={e => setGain({ trackId, value: e.target.value })} value={+gain}></InputRange>
        <Label>Gain</Label>
        <CurrentValue>{Math.round(gain/10).toString()}</CurrentValue>
      </Control>
      <Control>
        <InputRange id='pan' min={-50} max={50} step={1} onChange={e => setPan({ trackId, value: e.target.value })} value={+pan}></InputRange>
        <Label>Pan</Label>
        <CurrentValue>{Math.round(pan/10).toString()}</CurrentValue>
      </Control>
      <Control>
        <Switch isOn={mute} onClick={() => setMute({ trackId, value: !mute })} activeClass='red' />
        <Label>Mute</Label>
      </Control>
      <Control>
        <Switch isOn={solo} onClick={() => setSolo({ trackId, value: !solo })} activeClass='rgb(21, 255, 0)' />
        <Label>Solo</Label>
      </Control>
    </div>
  )
}

Controls.propTyes = {
  // voices: PropTypes.object.isRequired
}

export default Controls