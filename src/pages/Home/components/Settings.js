
export default function Settings({ handleScheme, handleVariation }) {

  return (
    <div className='settings-container'>
      <h2>Settings</h2>
      <div className="setting-forms">
        <form onChange={handleScheme} className='form'>
          <p>Schemes</p>
          <label>
            <input defaultChecked name='scheme' value='triade' type="radio"/>
            <span>Triade</span>
          </label>
          <label>
            <input name='scheme' value='tetrade' type="radio"/>
            <span>Tetrade</span>
          </label>
          <label>
            <input name='scheme' value='analogic' type="radio"/>
            <span>Analogic</span>
          </label>
        </form>
        <form onChange={handleVariation} className='form'>
          <p>Variation</p>
          <label>
            <input defaultChecked name='scheme' value='soft' type="radio"/>
            <span>Soft</span>
          </label>
          <label>
            <input name='scheme' value='pastel' type="radio"/>
            <span>Pastel</span>
          </label>
          <label>
            <input name='scheme' value='light' type="radio"/>
            <span>Light</span>
          </label>
          <label>
            <input name='scheme' value='hard' type="radio"/>
            <span>Hard</span>
          </label>
          <label>
            <input name='scheme' value='pale' type="radio"/>
            <span>Pale</span>
          </label>
        </form>
      </div>
    </div>
  )
}
