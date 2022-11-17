import { useGeneratePalette } from '../../../hooks/useGeneratePalette'
import Color from './Color'

export default function Colors() {
  const { colorPalette } = useGeneratePalette(6)
  
  return (
    <ul className='colors'>
      {colorPalette.map((color, index) => (
        <Color key={index} color={color}/>
      ))}
  </ul> 
  )
}
