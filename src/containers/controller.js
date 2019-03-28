import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import Select from '../components/ui/select'
// import Select from 'react-select'
import Tracks from '../components/tracks'
import Processors from '../components/processors'

import classes from './controller.module.scss'

const API_URL = 'http://some-api.com'

const Controller = (props) => {
  const [ mousePosition, setMousePosition ] = useState({x:null,y:null})
  const [ kit, setKit ] = useState('Feelin')
  const [ buffers, setBuffers] = useState(null)
  const [ loading, setLoading] = useState(false);
  const [ error, setError] = useState(null);
  const kitInputRef = useRef();

  // useEffect(() => {
  //   window.addEventListener('mousemove', handleMouseMove)
  //   return (() => {
  //     window.removeEventListener('mousemove', handleMouseMove)
  //   })
  // }, []);

  useEffect(() => {
    console.log('[Controller] kit', kit)
    // getBuffers(kit)
    return (() => {
      
    })
  }, [kit]);

  const getBuffers = async () => {
    setLoading(true);
    try {
      const response = await axios.get(`${API_URL}?query=${kit}`)
      setBuffers(response.data.buffers)
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  const options = [
    { value: 'Feelin', label: 'Feelin Kit' },
    { value: 'Floor', label: 'Floor Kit' },
    { value: 'Jazz', label: 'Jazz Kit' },
    { value: 'Nasty Raw', label: 'Nasty Raw Kit' }
  ]

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    })
  }

  return (
    <div className={classes.controller}>
      {/* <Select
        className='select-kit'
        style={{color: '#000000'}}
        isSearchable={false}
        defaultValue={kit}
        controlShouldRenderValue={true}
        // selectOption={kit}
        // ref={queryInputRef}
        value={kit}
        onChange={option => setKit(option.value)}
        options={options}
      /> */}
      <Select
        options={options}
        onValueChange={value => setKit(value)}
      />
      <Tracks />
      <Processors />
      <div>{mousePosition.x} {mousePosition.y}</div>
    </div>
  );
}

export default Controller