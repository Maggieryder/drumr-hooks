import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Select from './ui/select'
// import Select from 'react-select'

import Processor from './processor'

import classes from './processors.module.scss'

// const API_URL = 'http://some-api.com'

const Processors = (props) => {
  const [ query, setQuery ] = useState('Feelin')
  const [ stuff, setStuff ] = useState(null)
  const [ loading, setLoading] = useState(false);
  const [ error, setError] = useState(null);
  const queryInputRef = useRef();

  // useEffect(() => {
  //   console.log('[Tracks] query', query)
  //   // getStuff(query)
  //   return (() => {
      
  //   })
  // }, [query]);// either here or remove submit to update query

  // const getStuff = async () => {
  //   setLoading(true);
  //   try {
  //     const response = await axios.get(`${API_URL}?query=${query}`)
  //     setStuff(response.data.stuff)
  //   } catch (err) {
  //     setError(err);
  //   }
  //   setLoading(false);
  // };

  const options = [
    { value: 'Feelin', label: 'Feelin Kit' },
    { value: 'Floor', label: 'Floor Kit' },
    { value: 'Jazz', label: 'Jazz Kit' },
    { value: 'Nasty Raw', label: 'Nasty Raw Kit' }
  ]


  const style = {
    // width: `calc(50px * ${velocity}`,
    // height: `calc(50px * ${velocity}`,
    // transform: `scale(${velocity})`,
    // background: isOn ? 'red' : 'green'
  }

  // const handleMouseMove = event => {
  //   setMousePosition({
  //     x: event.pageX,
  //     y: event.pageY
  //   })
  // }

  // const handleClick = event => {
  //   // prevIsOn = !prevIsOn
  //   setIsOn(!isOn)
  // }

  return (
    <div className={classes.processors}>
      <Processor type='reverb'>
        [reverb]
      </Processor>
      <Processor type='delay'>
        [delay]
      </Processor>
      <Processor type='compressor'>
        [compressor]
      </Processor>
    </div>
  )
}

export default Processors