import { useCallback, useEffect, useState } from 'react'
import Color from './Color'
import ColorScheme from "color-scheme"

export default function Colors({ scheme, variation, selectedScheme, handleReceived }) {
  const [colorPalette, setColorPalette] = useState([])
  const [copiedColor, setCopiedColor] = useState('')
  const [isNotification, setIsNotification] = useState(false)
  const [schemeOption, setSchemeOption] = useState('triade')
  const [variationOption,  setVariationOption] = useState('soft')
  const [localScheme, setLocalScheme] = useState([])

  //get the local scheme to a state
  useEffect(() => {
    setLocalScheme(JSON.parse(localStorage.getItem(`scheme_${selectedScheme}`)))
  }, [selectedScheme])

  //set the color scheme to the selected local scheme
  useEffect(() => {
    if(localScheme !== null){
      setColorPalette(localScheme)
    }
  },[localScheme])

  //copy color code to clipboard
  const handleClick = (e) => {
    const colorCode = e.target.getAttribute('data-color')
    navigator.clipboard.writeText(colorCode)
    setCopiedColor(colorCode)
    
    setIsNotification(true)
    setTimeout(() => {
      setIsNotification(false)
    }, 1200)
  }
  
  //generate colors
  const generateColors = useCallback(() => {
    handleReceived()
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

  //generate colors with the first render
  useEffect(() => {
    generateColors()
  }, [generateColors])

  //generate colors if there is a change in the settings
  useEffect(() => {
    setSchemeOption(scheme)
    setVariationOption(variation)
    generateColors()
  }, [scheme, variation, generateColors])
  
  //generate colors when pressed space
  //causes excessive render 
  useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if(e.key === " ") {
        generateColors()
      }
    })
  })

  //save the scheme to the localStorage
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
        <button onClick={generateColors} className='btn'>Generate colors!</button>
        <span className='info'>or press <b>Space</b> to generate colors.</span>
        <span className='info'>Click on colors to copy to your clipboard.</span>
        <button onClick={handleSave} className='btn'>Save the scheme!</button>
      </div>
    </div>
  )
}
