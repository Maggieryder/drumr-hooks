import React, { useState } from 'react'

import classes from './ui.module.scss'

const Switch = ({ active }) => {
    const [isOn, setIsOn] = useState(false)

    return (
        <div className={classes.switch} onClick={() => setIsOn(!isOn)}>
            <div style={{ background: isOn ? `${active}` : 'rgba(0,0,0,.2)'}}></div>
        </div>
    )
}

export default Switch