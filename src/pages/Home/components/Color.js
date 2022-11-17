import React from 'react'

export default function Color({ color }) {
  return (
    <li data-color={`#${color}`} className='color' style={{backgroundColor: '#' + color}}>
      <span>{'#'+color}</span>
    </li>
  )
}
