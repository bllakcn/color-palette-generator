import {useEffect, useState} from 'react'

export default function Sidebar() {
  const [savedSchemes, setSavedSchemes] = useState([])
  let lengthOfStorage = localStorage.length

  useEffect(() => {
    setSavedSchemes([])
    console.log(lengthOfStorage)
    for(let i = 0; i < lengthOfStorage; i++){
      const currentScheme = JSON.parse(localStorage.getItem(`scheme_${i}`))
      setSavedSchemes(curr => [...curr, currentScheme])
    }
  }, [lengthOfStorage])
  return (
    <aside className='sidebar-container'>
      <h2 className='content-title'>Saved Schemes</h2>
      <div>
        <ul className='color-schemes'>
          {savedSchemes && savedSchemes.map((scheme, index) => (
          <li key={index}>
            <div className='color-scheme'>
              {scheme.map((color, index) => (
                <span key={index} style={{backgroundColor:'#'+color}} className='color'></span>
              ))}
            </div>
          </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
