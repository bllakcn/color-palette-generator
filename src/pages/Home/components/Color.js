
export default function Color({ color, handleClick }) {
  return (
    <>
      <li onClick={handleClick} data-color={`#${color}`} className='color' style={{backgroundColor: '#' + color}}>
        <span>{'#'+color}</span>
      </li>
    </>
  )
}
