import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import Bar from './bar'

import classes from './bars.module.scss'

const Bars = (props) => {
  return (
    <div className={classes.bars}>
      <Bar />
      <Bar />
      <Bar />
      <Bar />
    </div>
  )
}

// Bars.propTypes = {

// }

export default Bars