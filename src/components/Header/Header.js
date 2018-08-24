import React from 'react'
import css from './Header.css'

const header = props => {
  return (
    <div className={css.container}>
      <h1 className={css.heading}>Pomodoro + React</h1>
    </div>
  )
}

export default header;