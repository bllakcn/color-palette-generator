import './ColorPalette.scss'
import Colors from './components/Colors'
import Settings from './components/Settings'
import { useState } from 'react'

export default function ColorPalette() {
  const [scheme, setScheme] = useState('triade')
  const [variation, setVariation] = useState('soft')

  const handleScheme = (e) => {
    setScheme(e.target.value)
  }
  const handleVariation = (e) => {
    setVariation(e.target.value)
  }
  
  return (
    <div className='color-palette-container'>
      <div className='content-left'>
        <header>
          <h1 className='page-title'>Generate color palettes</h1>
        </header>
        <main>
          <div className='color-palette'>
            <Colors scheme={scheme} variation={variation} />
          </div>  
        </main>
        <Settings handleScheme={handleScheme} handleVariation={handleVariation}/>
      </div>
    </div>
  )
}
