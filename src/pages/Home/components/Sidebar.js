import {useEffect, useState} from 'react'

export default function Sidebar() {
  const [savedSchemes, setSavedSchemes] = useState([])

  useEffect(() => {
    for(let i = 0; i < localStorage.length; i++){
      const currentScheme = localStorage.getItem(`scheme_${i}`)
      savedSchemes.push(currentScheme)
    }
  }, [])
  return (
    <aside className='sidebar-container'>
      <h2 className='content-title'>Saved Schemes</h2>

    </aside>
  )
}
