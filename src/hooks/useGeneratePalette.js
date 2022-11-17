import ColorScheme from "color-scheme"

export const useGeneratePalette = (numberOfColors) => {

  const scheme =new ColorScheme()
  scheme.from_hue(Math.random() * 1000)
    .distance(.5)    
    .scheme('triade')   
    .variation('soft')

  const colors = scheme.colors()
  colors.sort(() => Math.random() - 0.5)
  const colorPalette = colors.slice(0, numberOfColors)

  return {colorPalette};
}