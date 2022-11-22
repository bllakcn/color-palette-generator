
export default function Sidebar({ savedSchemes, handleSelectedScheme }) {

  return (
    <aside className='sidebar-container'>
      <h2 className='content-title'>Saved Schemes</h2>
      <div>
        <ul className='color-schemes'>
          {savedSchemes && savedSchemes.map((scheme, index) => (
          <li id={index} key={index}  >
            <div onClick={handleSelectedScheme} className='color-scheme' id={index}>
              {scheme.map((color, index) => (
                <span key={index} style={{backgroundColor:'#'+color}} className='color'></span>
                ))}
                <span className="call-action-open">Open</span>
            </div>
            {/* <span onClick={handleDelete} className="call-action-delete">X</span> */}
          </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
