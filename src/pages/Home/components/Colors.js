import { useCallback, useEffect, useState } from 'react'
import Color from './Color'
import ColorScheme from "color-scheme"

export default function Colors({ scheme, variation }) {
  const [colorPalette, setColorPalette] = useState([])
  const [copiedColor, setCopiedColor] = useState('')
  const [isNotification, setIsNotification] = useState(false)
  const [schemeOption, setSchemeOption] = useState('triade')
  const [variationOption,  setVariationOption] = useState('soft')

  const handleClick = (e) => {
    const colorCode = e.target.getAttribute('data-color')
    navigator.clipboard.writeText(colorCode)
    setCopiedColor(colorCode)
    
    setIsNotification(true)
    setTimeout(() => {
      setIsNotification(false)
    }, 1200)
  }
  
  const generateColors = useCallback(() => {
    const scheme =new ColorScheme()
    scheme.from_hue(Math.random() * 1000)
    .distance(.5)    
    .scheme(schemeOption) 
    .variation(variationOption)

    const colors = scheme.colors()
    colors.sort(() => Math.random() - 0.5)
    const colorPalette = colors.slice(0, 5)

    setColorPalette(colorPalette)
  }, [schemeOption, variationOption])

  useEffect(() => {
    generateColors()
  }, [generateColors])

  useEffect(() => {
    setSchemeOption(scheme)
    setVariationOption(variation)
    generateColors()
  }, [scheme, variation, generateColors])
  

  const handleGenerate = () => {
    generateColors()
  }
  
  //causes excessive render 
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if(e.key === " ") {
        generateColors()
      }
    })
  })

  const handleSave = () => {
    localStorage.setItem(`scheme_${localStorage.length}`, JSON.stringify(colorPalette))
    console.log(colorPalette)
  }
  
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
        <span className='info'>or press <b>Space</b> to generate colors.</span>
        <span className='info'>Click on colors to copy to your clipboard.</span>
        <button onClick={handleSave} className='btn'>Save the scheme!</button>
      </div>
    </div>
  )
}
