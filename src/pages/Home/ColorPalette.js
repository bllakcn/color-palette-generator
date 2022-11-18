import './ColorPalette.scss'
import Colors from './components/Colors'
import Settings from './components/Settings'

export default function ColorPalette() {

  return (
    <div className='color-palette-container'>
      <div className='content-left'>
        <header>
          <h1 className='page-title'>Generate color palettes</h1>
        </header>
        <main>
          <div className='color-palette'>
            <Colors />
          </div>  
        </main>
        <Settings/>
      </div>
    </div>
  )
}
