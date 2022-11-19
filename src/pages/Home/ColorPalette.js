import { useState } from 'react'
import Colors from './components/Colors'
import Settings from './components/Settings'
import Sidebar from './components/Sidebar'
import './ColorPalette.scss'

export default function ColorPalette() {
  const [scheme, setScheme] = useState('triade')
  const [variation, setVariation] = useState('soft')
  const [isSavedSchemesOpen, setIsSavedSchemesOpen] = useState(false)

  const handleScheme = (e) => {
    setScheme(e.target.value)
  }
  const handleVariation = (e) => {
    setVariation(e.target.value)
  }
  
  return (
    <div className='color-palette-container'>
      {isSavedSchemesOpen && <Sidebar/>}
      <div className='content-main'>
        <header>
          {!isSavedSchemesOpen ? (
            <svg onClick={() => setIsSavedSchemesOpen(curr => !curr)} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z"/></svg>
          ) : (
            <svg className='close-btn' onClick={() => setIsSavedSchemesOpen(curr => !curr)} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"/></svg>
          )}
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
