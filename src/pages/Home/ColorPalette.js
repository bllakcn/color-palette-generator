import { useState, useEffect } from 'react'
import Colors from './components/Colors'
import Settings from './components/Settings'
import Sidebar from './components/Sidebar'
import ThemeSelector from './components/ThemeSelector'
import './ColorPalette.scss'

export default function ColorPalette() {
  const [scheme, setScheme] = useState('triade')
  const [variation, setVariation] = useState('soft')
  const [isSavedSchemesOpen, setIsSavedSchemesOpen] = useState(false)
  const [savedSchemes, setSavedSchemes] = useState([])
  const [selectedScheme, setSelectedScheme] = useState(null)
  let lengthOfStorage = localStorage.length
  
  //open the selected saved scheme
  const handleSelectedScheme = (e) => {
    setSelectedScheme(e.target.parentNode.id)
    setIsSavedSchemesOpen(false)
  }
  //close the saved schemes tab when clicked outside
  const handleCloseSchemes = () => {
    if(isSavedSchemesOpen){
      setIsSavedSchemesOpen(false)
    }
  }
  //handle settings
  const handleScheme = (e) => {
    setScheme(e.target.value)
  }
  const handleVariation = (e) => {
    setVariation(e.target.value)
  }

  //get the locally saved schemes
  useEffect(() => {
    setSavedSchemes([])
    for(let i = 0; i < lengthOfStorage; i++){
      const currentScheme = JSON.parse(localStorage.getItem(`scheme_${i}`))
      setSavedSchemes(curr => [...curr, currentScheme])
    }
  }, [lengthOfStorage])
  
  return (
    <div className='color-palette-container'>
      {isSavedSchemesOpen && <Sidebar handleSelectedScheme={handleSelectedScheme} savedSchemes={savedSchemes}/>}
      <div onClick={handleCloseSchemes} className='content-main'>
        <header>
          {!isSavedSchemesOpen ? (
            <svg className='side-svg' onClick={() => setIsSavedSchemesOpen(curr => !curr)} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M6 36v-3h36v3Zm0-10.5v-3h36v3ZM6 15v-3h36v3Z"/></svg>
          ) : (
            <svg className='side-svg close-btn' onClick={() => setIsSavedSchemesOpen(curr => !curr)} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"/></svg>
          )}
          <h1 className='page-title'>Generate color palettes</h1>
          <ThemeSelector></ThemeSelector>
        </header>
        <main>
          <div className='color-palette'>
            <Colors scheme={scheme} variation={variation} selectedScheme={selectedScheme}/>
          </div>  
        </main>
        <Settings handleScheme={handleScheme} handleVariation={handleVariation}/>
      </div>
    </div>
  )
}
