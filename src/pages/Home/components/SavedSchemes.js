
export default function Sidebar({ savedSchemes, handleSelectedScheme, toggleSavedSchemes }) {

  return (
    <aside className='modal-container'>
      <div className="title-wrapper">
        <h2 className='modal-title'>Saved Schemes</h2>
        <svg className='close-btn' onClick={toggleSavedSchemes} xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z"/></svg>
      </div>
      <div>
        <ul className='color-schemes'>
          {savedSchemes.slice(0,-1).length >= 1 ? (
            savedSchemes.slice(0,-1).map((scheme, index) => (
              <li id={index} key={index}  >
                <div onClick={handleSelectedScheme} className='color-scheme' id={index}>
                  {scheme.map((color, index) => (
                    <span key={index} style={{backgroundColor:'#'+color}} className='color'></span>
                    ))}
                    <span className="call-action-open">Open</span>
                </div>
                {/* <span onClick={handleDelete} className="call-action-delete">X</span> */}
              </li>
            ))) : 
            (
              <span>No saved scheme.</span>
            )}
        </ul>
      </div>
    </aside>
  )
}
