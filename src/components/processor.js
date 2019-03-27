import React, { useState, useEffect } from 'react'
// import PropTypes from 'prop-types'
import Select from './ui/select'
import InputRange from './ui/inputRange'
import Label from './ui/label'
import CurrentValue from './ui/currentValue'
import Switch from './ui/switch'

import classes from './processor.module.scss'

const Processor = ({children, type, options, label}) => {

    return (
        <div className={classes.processor} type={type}>{children}</div>
    )
}

// Processor.propTypes = {

// }

export default Processor