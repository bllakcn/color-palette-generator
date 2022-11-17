import './ColorPalette.scss'
import Colors from './components/Colors'

export default function ColorPalette() {

  return (
    <div>
      <h1 className='page-title'>Generate color palettes</h1>
      <main>
        <div className='color-palette'>
          <Colors/>
        </div>  
      </main>
    </div>
  )
}
