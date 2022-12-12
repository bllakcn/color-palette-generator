import { useEffect, useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext()

export function ThemeProvider ( {children }) {
  const [theme, setTheme] = useState(null)
  
  useEffect(() => {
    if(!localStorage.getItem('theme')){
      localStorage.setItem('theme', 'dark')
    }
    else if (localStorage.getItem('theme')){
      setTheme(localStorage.getItem('theme'))
    }
  },[])

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}