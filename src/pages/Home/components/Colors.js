import { useEffect, useState } from 'react'
import Color from './Color'
import ColorScheme from "color-scheme"

export default function Colors() {
  const [colorPalette, setColorPalette] = useState([])
  const [copiedColor, setCopiedColor] = useState('')
  const [isNotification, setIsNotification] = useState(false)

  const handleClick = (e) => {
    const colorCode = e.target.getAttribute('data-color')
    navigator.clipboard.writeText(colorCode)
    setCopiedColor(colorCode)
    
    setIsNotification(true)
    setTimeout(() => {
      setIsNotification(false)
    }, 1200)
  }
  
  const generateColors = () => {
    const scheme =new ColorScheme()
    scheme.from_hue(Math.random() * 1000)
    .distance(.5)    
    .scheme('triade')   
    .variation('soft')
    
    const colors = scheme.colors()
    colors.sort(() => Math.random() - 0.5)
    const colorPalette = colors.slice(0, 5)
    
    return colorPalette
  }
  
  useEffect(() => {
    setColorPalette(generateColors())
  }, [])
  
  const handleGenerate = () => {
    setColorPalette(generateColors())
  }
  
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if(e.key === " ") {
        setColorPalette(generateColors())
      }
    })
  })
  
  return (
    <div>
      <span className={`${isNotification ? 'active' : ''} notification`}>
        {`${copiedColor} is copied to your clipboard!`}
      </span>
      <ul className='colors'>
        {colorPalette.map((color, index) => (
          <Color handleClick={handleClick} key={index} color={color}/>
        ))}
      </ul>
      <div className='generate-colors'>
        <button onClick={handleGenerate} className='btn'>Generate colors!</button>
        <span className='info'>or press <b>Space</b> to generate colors</span>
      </div>
    </div>
  )
}
