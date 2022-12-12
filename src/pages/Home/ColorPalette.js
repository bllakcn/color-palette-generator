import { useState, useEffect } from 'react'
import Colors from './components/Colors'
import Settings from './components/Settings'
import Sidebar from './components/SavedSchemes'
import ThemeSelector from './components/ThemeSelector'
import './ColorPalette.scss'

export default function ColorPalette() {
  const [scheme, setScheme] = useState('triade')
  const [variation, setVariation] = useState('soft')
  const [isSavedSchemesOpen, setIsSavedSchemesOpen] = useState(false)
  const [savedSchemes, setSavedSchemes] = useState([])
  const [selectedScheme, setSelectedScheme] = useState(null)
  let lengthOfStorage = localStorage.length
  

  //toggle
  const toggleSavedSchemes = () => {
    setIsSavedSchemesOpen(curr => !curr)
  }
  //open the selected saved scheme
  const handleSelectedScheme = (e) => {
    setSelectedScheme(e.target.parentNode.id)
    setIsSavedSchemesOpen(false)
    setTimeout(() => {
      setSelectedScheme(null)
    }, 50)
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
      {isSavedSchemesOpen && <Sidebar handleSelectedScheme={handleSelectedScheme} savedSchemes={savedSchemes} toggleSavedSchemes={toggleSavedSchemes}/>}
      <div onClick={handleCloseSchemes} className='content-main'>
        <header>
          <svg className='side-svg' onClick={toggleSavedSchemes} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M6 46V11q0-1.2.9-2.1Q7.8 8 9 8h24q1.2 0 2.125.9t.925 2.1v35L21 39.65Zm3-4.55 12-5.15 12 5.15V11H9Zm30 .05V5H11.65V2H39q1.2 0 2.1.9.9.9.9 2.1v36.5ZM9 11h24-12Z"/></svg>  
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
